
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  Bell, 
  Newspaper,
  Settings,
  LogOut,
  BarChart3
} from 'lucide-react';

const AdminDashboard = () => {
  const { signOut, profile } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const handleSignOut = async () => {
    await signOut();
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'classes', label: 'Class Management', icon: GraduationCap },
    { id: 'subjects', label: 'Subject Management', icon: BookOpen },
    { id: 'attendance', label: 'Attendance Reports', icon: Calendar },
    { id: 'news', label: 'News & Updates', icon: Newspaper },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'alerts', label: 'System Alerts', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome, {profile?.full_name}</p>
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
              <h2 className="text-3xl font-bold">System Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Users className="w-8 h-8 text-blue-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Total Users</p>
                        <p className="text-2xl font-bold">1,234</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <GraduationCap className="w-8 h-8 text-green-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Total Classes</p>
                        <p className="text-2xl font-bold">45</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Calendar className="w-8 h-8 text-purple-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Today's Sessions</p>
                        <p className="text-2xl font-bold">28</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <BarChart3 className="w-8 h-8 text-orange-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Avg Attendance</p>
                        <p className="text-2xl font-bold">87%</p>
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
                          <p className="font-medium">New teacher registered</p>
                          <p className="text-sm text-gray-600">Dr. Smith joined CSE department</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-green-50 rounded-md">
                        <Calendar className="w-5 h-5 text-green-600 mr-3" />
                        <div>
                          <p className="font-medium">Attendance marked</p>
                          <p className="text-sm text-gray-600">CS301 - Data Structures class</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-purple-50 rounded-md">
                        <Bell className="w-5 h-5 text-purple-600 mr-3" />
                        <div>
                          <p className="font-medium">New announcement</p>
                          <p className="text-sm text-gray-600">Mid-term exam schedule released</p>
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
                      <Button className="h-20 flex-col" onClick={() => setActiveTab('users')}>
                        <Users className="w-6 h-6 mb-2" />
                        Manage Users
                      </Button>
                      <Button className="h-20 flex-col" onClick={() => setActiveTab('classes')}>
                        <GraduationCap className="w-6 h-6 mb-2" />
                        Manage Classes
                      </Button>
                      <Button className="h-20 flex-col" onClick={() => setActiveTab('news')}>
                        <Newspaper className="w-6 h-6 mb-2" />
                        Post News
                      </Button>
                      <Button className="h-20 flex-col" onClick={() => setActiveTab('alerts')}>
                        <Bell className="w-6 h-6 mb-2" />
                        Send Alert
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
                  This section is under development. The full functionality will be implemented with detailed forms and management interfaces.
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

export default AdminDashboard;
