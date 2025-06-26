
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Calendar, 
  BarChart3, 
  BookOpen, 
  User,
  LogOut,
  Clock,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

const StudentDashboard = () => {
  const { signOut, profile } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const handleSignOut = async () => {
    await signOut();
  };

  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: BarChart3 },
    { id: 'attendance', label: 'My Attendance', icon: Calendar },
    { id: 'subjects', label: 'My Subjects', icon: BookOpen },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  // Mock data for demonstration
  const attendanceData = {
    overall: 87,
    subjects: [
      { name: 'Data Structures', code: 'CS301', attendance: 92, total: 25, present: 23 },
      { name: 'Database Systems', code: 'CS401', attendance: 85, total: 20, present: 17 },
      { name: 'Computer Networks', code: 'CS501', attendance: 80, total: 22, present: 18 },
      { name: 'Software Engineering', code: 'CS502', attendance: 90, total: 18, present: 16 },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
            <p className="text-gray-600">Welcome, {profile?.full_name}</p>
            {profile?.roll_number && (
              <p className="text-sm text-gray-500">Roll Number: {profile.roll_number}</p>
            )}
          </div>
          <Button onClick={handleSignOut} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm h-screen sticky top-0">
          <nav className="p-4">
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-3 py-2 text-left rounded-md transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Attendance Overview</h2>
              
              {/* Overall Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-green-100 rounded-full">
                        <TrendingUp className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Overall Attendance</p>
                        <p className="text-3xl font-bold text-green-600">{attendanceData.overall}%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <BookOpen className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Total Subjects</p>
                        <p className="text-3xl font-bold text-blue-600">{attendanceData.subjects.length}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-purple-100 rounded-full">
                        <Clock className="w-8 h-8 text-purple-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Total Classes</p>
                        <p className="text-3xl font-bold text-purple-600">
                          {attendanceData.subjects.reduce((sum, subject) => sum + subject.total, 0)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Attendance Warning */}
              {attendanceData.overall < 75 && (
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                      <div>
                        <p className="font-semibold text-red-800">Attendance Warning</p>
                        <p className="text-red-700">Your attendance is below 75%. Please attend classes regularly.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Subject-wise Attendance */}
              <Card>
                <CardHeader>
                  <CardTitle>Subject-wise Attendance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {attendanceData.subjects.map((subject, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <h4 className="font-semibold">{subject.name}</h4>
                            <p className="text-sm text-gray-600">{subject.code}</p>
                          </div>
                          <div className="text-right">
                            <p className={`text-2xl font-bold ${
                              subject.attendance >= 85 ? 'text-green-600' :
                              subject.attendance >= 75 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {subject.attendance}%
                            </p>
                            <p className="text-sm text-gray-600">
                              {subject.present}/{subject.total} classes
                            </p>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              subject.attendance >= 85 ? 'bg-green-500' :
                              subject.attendance >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${subject.attendance}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Detailed Attendance Report</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-12">
                    <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Detailed Attendance View</h3>
                    <p className="text-gray-600">
                      This section will show detailed attendance records with calendar view and date-wise breakdown.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'subjects' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">My Subjects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {attendanceData.subjects.map((subject, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                        {subject.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p><strong>Code:</strong> {subject.code}</p>
                        <p><strong>Total Classes:</strong> {subject.total}</p>
                        <p><strong>Classes Attended:</strong> {subject.present}</p>
                        <p><strong>Attendance:</strong> 
                          <span className={`ml-2 font-bold ${
                            subject.attendance >= 85 ? 'text-green-600' :
                            subject.attendance >= 75 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {subject.attendance}%
                          </span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">My Profile</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <p className="text-lg">{profile?.full_name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <p className="text-lg">{profile?.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Roll Number</label>
                      <p className="text-lg">{profile?.roll_number || 'Not set'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                      <p className="text-lg capitalize">{profile?.role}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button>Change Password</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
