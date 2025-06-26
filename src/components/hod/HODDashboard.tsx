
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  LogOut,
  BarChart3,
  UserPlus,
  Plus
} from 'lucide-react';

const HODDashboard = () => {
  const { signOut, profile } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const handleSignOut = async () => {
    await signOut();
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'teachers', label: 'Teacher Management', icon: Users },
    { id: 'assignments', label: 'Class Assignments', icon: GraduationCap },
    { id: 'students', label: 'Student Management', icon: UserPlus },
    { id: 'attendance', label: 'Attendance Reports', icon: Calendar },
    { id: 'subjects', label: 'Subject Management', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">HOD Dashboard</h1>
            <p className="text-gray-600">Welcome, {profile?.full_name}</p>
            <p className="text-sm text-gray-500">Department Head</p>
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
              <h2 className="text-3xl font-bold">Department Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Users className="w-8 h-8 text-blue-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Total Teachers</p>
                        <p className="text-2xl font-bold">15</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <UserPlus className="w-8 h-8 text-green-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Total Students</p>
                        <p className="text-2xl font-bold">480</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <GraduationCap className="w-8 h-8 text-purple-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Active Classes</p>
                        <p className="text-2xl font-bold">12</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <BookOpen className="w-8 h-8 text-orange-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Total Subjects</p>
                        <p className="text-2xl font-bold">35</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-blue-50 rounded-md">
                        <Users className="w-5 h-5 text-blue-600 mr-3" />
                        <div>
                          <p className="font-medium">Teacher Assignment</p>
                          <p className="text-sm text-gray-600">Prof. Johnson assigned to CS301</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-green-50 rounded-md">
                        <GraduationCap className="w-5 h-5 text-green-600 mr-3" />
                        <div>
                          <p className="font-medium">New Class Created</p>
                          <p className="text-sm text-gray-600">CSE-4th Year Section B</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-purple-50 rounded-md">
                        <Calendar className="w-5 h-5 text-purple-600 mr-3" />
                        <div>
                          <p className="font-medium">Attendance Report</p>
                          <p className="text-sm text-gray-600">Weekly report generated</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <Button className="h-20 flex-col" onClick={() => setActiveTab('assignments')}>
                        <Plus className="w-6 h-6 mb-2" />
                        Assign Teacher
                      </Button>
                      <Button className="h-20 flex-col" onClick={() => setActiveTab('students')}>
                        <UserPlus className="w-6 h-6 mb-2" />
                        Add Student
                      </Button>
                      <Button className="h-20 flex-col" onClick={() => setActiveTab('subjects')}>
                        <BookOpen className="w-6 h-6 mb-2" />
                        Manage Subjects
                      </Button>
                      <Button className="h-20 flex-col" onClick={() => setActiveTab('attendance')}>
                        <Calendar className="w-6 h-6 mb-2" />
                        View Reports
                      </Button>
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
                  This section is under development. The full functionality will be implemented with detailed management interfaces.
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

export default HODDashboard;
