
-- Create user roles enum
CREATE TYPE public.user_role AS ENUM ('admin', 'hod', 'teacher', 'student');

-- Create departments table
CREATE TABLE public.departments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  code TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create classes table
CREATE TABLE public.classes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  department_id UUID REFERENCES public.departments(id) ON DELETE CASCADE,
  semester INTEGER,
  section TEXT,
  academic_year TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user profiles table
CREATE TABLE public.user_profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  role public.user_role NOT NULL,
  roll_number TEXT,
  employee_id TEXT,
  department_id UUID REFERENCES public.departments(id),
  phone TEXT,
  address TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create subjects table
CREATE TABLE public.subjects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  code TEXT NOT NULL UNIQUE,
  department_id UUID REFERENCES public.departments(id) ON DELETE CASCADE,
  semester INTEGER,
  credits INTEGER DEFAULT 3,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create class_assignments table (teachers assigned to classes and subjects)
CREATE TABLE public.class_assignments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  teacher_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  class_id UUID REFERENCES public.classes(id) ON DELETE CASCADE,
  subject_id UUID REFERENCES public.subjects(id) ON DELETE CASCADE,
  academic_year TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(teacher_id, class_id, subject_id, academic_year)
);

-- Create student_enrollments table
CREATE TABLE public.student_enrollments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  class_id UUID REFERENCES public.classes(id) ON DELETE CASCADE,
  academic_year TEXT NOT NULL,
  enrollment_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(student_id, class_id, academic_year)
);

-- Create attendance_sessions table
CREATE TABLE public.attendance_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  class_id UUID REFERENCES public.classes(id) ON DELETE CASCADE,
  subject_id UUID REFERENCES public.subjects(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  session_date DATE NOT NULL,
  session_time TIME NOT NULL,
  duration_minutes INTEGER DEFAULT 60,
  topic TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create attendance_records table
CREATE TABLE public.attendance_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID REFERENCES public.attendance_sessions(id) ON DELETE CASCADE,
  student_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  status TEXT NOT NULL CHECK (status IN ('present', 'absent', 'late')),
  marked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  marked_by UUID REFERENCES public.user_profiles(id),
  notes TEXT,
  UNIQUE(session_id, student_id)
);

-- Create news table
CREATE TABLE public.news (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  is_published BOOLEAN DEFAULT FALSE,
  priority TEXT DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create events table
CREATE TABLE public.events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  event_date DATE NOT NULL,
  event_time TIME,
  location TEXT,
  organizer_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create alerts table
CREATE TABLE public.alerts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT DEFAULT 'info' CHECK (type IN ('info', 'warning', 'error', 'success')),
  target_role public.user_role,
  is_active BOOLEAN DEFAULT TRUE,
  created_by UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.class_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attendance_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attendance_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.alerts ENABLE ROW LEVEL SECURITY;

-- Create security definer function to get user role
CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS public.user_role
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT role FROM public.user_profiles WHERE id = auth.uid();
$$;

-- Create RLS policies for user_profiles
CREATE POLICY "Users can view their own profile" ON public.user_profiles
  FOR SELECT USING (id = auth.uid());

CREATE POLICY "Admins can view all profiles" ON public.user_profiles
  FOR SELECT USING (public.get_user_role() = 'admin');

CREATE POLICY "HODs can view department profiles" ON public.user_profiles
  FOR SELECT USING (
    public.get_user_role() = 'hod' AND 
    department_id = (SELECT department_id FROM public.user_profiles WHERE id = auth.uid())
  );

CREATE POLICY "Users can update their own profile" ON public.user_profiles
  FOR UPDATE USING (id = auth.uid());

CREATE POLICY "Admins can manage all profiles" ON public.user_profiles
  FOR ALL USING (public.get_user_role() = 'admin');

-- Create RLS policies for departments
CREATE POLICY "Everyone can view departments" ON public.departments
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins can manage departments" ON public.departments
  FOR ALL USING (public.get_user_role() = 'admin');

-- Create RLS policies for classes
CREATE POLICY "Everyone can view classes" ON public.classes
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins and HODs can manage classes" ON public.classes
  FOR ALL USING (public.get_user_role() IN ('admin', 'hod'));

-- Create RLS policies for subjects
CREATE POLICY "Everyone can view subjects" ON public.subjects
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins and HODs can manage subjects" ON public.subjects
  FOR ALL USING (public.get_user_role() IN ('admin', 'hod'));

-- Create RLS policies for attendance
CREATE POLICY "Teachers can view their assigned attendance sessions" ON public.attendance_sessions
  FOR SELECT USING (
    teacher_id = auth.uid() OR 
    public.get_user_role() IN ('admin', 'hod')
  );

CREATE POLICY "Teachers can manage their attendance sessions" ON public.attendance_sessions
  FOR ALL USING (teacher_id = auth.uid() OR public.get_user_role() IN ('admin', 'hod'));

CREATE POLICY "Students can view their attendance records" ON public.attendance_records
  FOR SELECT USING (
    student_id = auth.uid() OR 
    public.get_user_role() IN ('admin', 'hod', 'teacher')
  );

CREATE POLICY "Teachers can manage attendance records" ON public.attendance_records
  FOR ALL USING (public.get_user_role() IN ('admin', 'hod', 'teacher'));

-- Create RLS policies for news, events, alerts
CREATE POLICY "Everyone can view published news" ON public.news
  FOR SELECT USING (is_published = true OR public.get_user_role() IN ('admin', 'hod'));

CREATE POLICY "Admins and HODs can manage news" ON public.news
  FOR ALL USING (public.get_user_role() IN ('admin', 'hod'));

CREATE POLICY "Everyone can view events" ON public.events
  FOR SELECT TO authenticated USING (is_published = true OR public.get_user_role() IN ('admin', 'hod'));

CREATE POLICY "Admins and HODs can manage events" ON public.events
  FOR ALL USING (public.get_user_role() IN ('admin', 'hod'));

CREATE POLICY "Users can view relevant alerts" ON public.alerts
  FOR SELECT USING (
    is_active = true AND 
    (target_role IS NULL OR target_role = public.get_user_role()) AND
    (expires_at IS NULL OR expires_at > NOW())
  );

CREATE POLICY "Admins can manage alerts" ON public.alerts
  FOR ALL USING (public.get_user_role() = 'admin');

-- Create trigger function to update user profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    COALESCE((NEW.raw_user_meta_data->>'role')::public.user_role, 'student')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert sample data
INSERT INTO public.departments (name, code) VALUES
  ('Computer Science & Engineering', 'CSE'),
  ('Electronics & Communication', 'ECE'),
  ('Mechanical Engineering', 'ME'),
  ('Civil Engineering', 'CE');

INSERT INTO public.subjects (name, code, department_id, semester) VALUES
  ('Data Structures', 'CS301', (SELECT id FROM public.departments WHERE code = 'CSE'), 3),
  ('Database Management Systems', 'CS401', (SELECT id FROM public.departments WHERE code = 'CSE'), 4),
  ('Computer Networks', 'CS501', (SELECT id FROM public.departments WHERE code = 'CSE'), 5),
  ('Digital Electronics', 'EC201', (SELECT id FROM public.departments WHERE code = 'ECE'), 2);
