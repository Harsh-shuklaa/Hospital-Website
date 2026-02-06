import React from 'react';
import { LayoutDashboard, Calendar, FileText, Settings, LogOut, Bell } from 'lucide-react';

const PatientPortal = () => {
    return (
        <div className="flex h-[calc(100vh-80px)] bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
                <div className="p-6">
                    <h2 className="text-xl font-bold text-primary-700">MyHealth Portal</h2>
                </div>
                <nav className="flex-1 px-4 space-y-2">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 bg-primary-50 text-primary-700 rounded-xl font-medium">
                        <LayoutDashboard size={20} /> Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition">
                        <Calendar size={20} /> Appointments
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition">
                        <FileText size={20} /> Medical Records
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition">
                        <Bell size={20} /> Notifications
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition">
                        <Settings size={20} /> Settings
                    </a>
                </nav>
                <div className="p-4 border-t border-gray-200">
                     <a href="#" className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl font-medium transition">
                        <LogOut size={20} /> Logout
                    </a>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto p-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Welcome back, John</h1>
                        <p className="text-gray-500">Here's your health overview</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className="bg-purple-100 p-4 rounded-xl text-purple-600">
                            <Calendar size={24} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Next Appointment</p>
                            <p className="text-lg font-bold text-gray-900">Oct 24, 10:00 AM</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className="bg-blue-100 p-4 rounded-xl text-blue-600">
                             <FileText size={24} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Latest Report</p>
                            <p className="text-lg font-bold text-gray-900">Blood Test Result</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Appointments</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-gray-700 shadow-sm">
                                    24
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Dr. Sarah Wilson</p>
                                    <p className="text-sm text-gray-500">Cardiology Checkup • 10:00 AM</p>
                                </div>
                            </div>
                            <button className="text-primary-600 font-medium hover:underline">Reschedule</button>
                        </div>
                        {/* More items */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientPortal;
