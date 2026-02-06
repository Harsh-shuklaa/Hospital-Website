import React from 'react';
import Button from './Button';

const AppointmentForm = () => {
    return (
        <div className="bg-white rounded-2xl shadow-card p-6 md:p-8 -mt-10 lg:-mt-20 relative z-30 container-custom mx-auto max-w-6xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Book an Appointment</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <input 
                    type="text" 
                    placeholder="Patient Name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                />
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-white text-gray-600">
                    <option value="">Select Department</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                </select>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-white text-gray-600">
                    <option value="">Select Doctor</option>
                    <option value="dr-smith">Dr. Smith</option>
                </select>
                <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition text-gray-600"
                />
                <Button fullWidth>Book Now</Button>
            </form>
        </div>
    );
};

export default AppointmentForm;
