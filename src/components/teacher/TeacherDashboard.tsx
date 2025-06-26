
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Calendar, 
  Users, 
  BookOpen, 
  LogOut,
  BarChart3,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

const TeacherDashboard = () => {
  const { signOut, profile } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const handleSignOut = async () => {
    await signOut();
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'classes', label: 'My Classes', icon: Users },
    { id: 'attendance', label: 'Mark Attendance', icon: Calendar },
    { id: 'reports', label: 'Attendance Reports', icon: BookOpen },
  ];

  // Mock data for demonstration
  const todayClasses = [
    { id: 1, subject: 'Data Structures', class: 'CSE-3A', time: '09:00 AM', status: 'upcoming' },
    { id: 2, subject: 'Database Systems', class: 'CSE-4B', time: '11:00 AM', status: 'completed' },
    { id: 3, subject: 'Computer Networks', class: 'CSE-5A', time: '02:00 PM', status: 'upcoming' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
            <p className="text-gray-600">Welcome, {profile?.full_name}</p>
            {profile?.employee_id && (
              <p className="text-sm text-gray-500">Employee ID: {profile.employee_id}</p>
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
              <h2 className="text-3xl font-bold">Today's Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Calendar className="w-8 h-8 text-blue-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Today's Classes</p>
                        <p className="text-2xl font-bold">{todayClasses.length}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Completed</p>
                        <p className="text-2xl font-bold">
                          {todayClasses.filter(c => c.status === 'completed').length}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Clock className="w-8 h-8 text-orange-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Upcoming</p>
                        <p className="text-2xl font-bold">
                          {todayClasses.filter(c => c.status === 'upcoming').length}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Today's Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {todayClasses.map((classItem) => (
                      <div key={classItem.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center">
                          <div className={`p-2 rounded-full mr-4 ${
                            classItem.status === 'completed' ? 'bg-green-100' : 'bg-blue-100'
                          }`}>
                            {classItem.status === 'completed' ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <Clock className="w-5 h-5 text-blue-600" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold">{classItem.subject}</h4>
                            <p className="text-sm text-gray-600">{classItem.class} • {classItem.time}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {classItem.status === 'upcoming' && (
                            <Button size="sm" onClick={() => setActiveTab('attendance')}>
                              Mark Attendance
                            </Button>
                          )}
                          {classItem.status === 'completed' && (
                            <Button size="sm" variant="outline">
                              View Report
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <Button className="h-20 flex-col" onClick={() => setActiveTab('attendance')}>
                        <Calendar className="w-6 h-6 mb-2" />
                        Mark Attendance
                      </Button>
                      <Button className="h-20 flex-col" onClick={() => setActiveTab('reports')}>
                        <BarChart3 className="w-6 h-6 mb-2" />
                        View Reports
                      </Button>
                      <Button className="h-20 flex-col" onClick={() => setActiveTab('classes')}>
                        <Users className="w-6 h-6 mb-2" />
                        My Classes
                      </Button>
                      <Button className="h-20 flex-col">
                        <BookOpen className="w-6 h-6 mb-2" />
                        Lesson Plans
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-green-50 rounded-md">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        <div>
                          <p className="font-medium">Attendance Marked</p>
                          <p className="text-sm text-gray-600">CSE-4B Database Systems - 28/30 present</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-blue-50 rounded-md">
                        <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                        <div>
                          <p className="font-medium">Class Scheduled</p>
                          <p className="text-sm text-gray-600">Computer Networks - Tomorrow 10:00 AM</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-purple-50 rounded-md">
                        <BookOpen className="w-5 h-5 text-purple-600 mr-3" />
                        <div>
                          <p className="font-medium">Report Generated</p>
                          <p className="text-sm text-gray-600">Monthly attendance report for CSE-3A</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab !== 'overview' && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-semibold mb-4">
                  {menuItems.find(item => item.id === activeTab)?.label}
                </h3>
                <p className="text-gray-600 mb-6">
                  This section is under development. The full functionality will be implemented with attendance marking interfaces and detailed reporting.
                </p>
                <Button onClick={() => setActiveTab('overview')}>
                  Back to Overview
                </Button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;
