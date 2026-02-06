import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar, User, FileText, Clock } from 'lucide-react';
import Button from '../components/Button';

const Booking = () => {
    const [step, setStep] = useState(1);
    
    // Steps: 1. Personal, 2. Medical, 3. Schedule, 4. Confirm

    const steps = [
        { number: 1, title: 'Personal Info', icon: User },
        { number: 2, title: 'Medical Info', icon: FileText },
        { number: 3, title: 'Schedule', icon: Calendar },
        { number: 4, title: 'Confirm', icon: Check },
    ];

    const nextStep = () => setStep(s => Math.min(s + 1, 4));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    return (
        <div className="pt-10 pb-20 min-h-screen bg-slate-50">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900">Book an Appointment</h1>
                    <p className="text-gray-500 mt-2">Schedule your visit with our specialists in just a few steps.</p>
                </div>

                {/* Stepper */}
                <div className="flex justify-between items-center mb-12 relative px-4 sm:px-12">
                     <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2 rounded-full"></div>
                     <div className="absolute top-1/2 left-0 h-1 bg-primary-500 -z-10 -translate-y-1/2 rounded-full transition-all duration-300" style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
                     
                     {steps.map((s) => (
                         <div key={s.number} className="flex flex-col items-center gap-2 bg-slate-50 px-2">
                             <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${step >= s.number ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30' : 'bg-gray-200 text-gray-500'}`}>
                                 {step > s.number ? <Check size={18} /> : s.number}
                             </div>
                             <span className={`text-xs font-medium ${step >= s.number ? 'text-primary-700' : 'text-gray-400'}`}>{s.title}</span>
                         </div>
                     ))}
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-2xl shadow-card p-6 md:p-10">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {step === 1 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-gray-800">Personal Details</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none" placeholder="Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                                        <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none" placeholder="+1 (555) 000-0000" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-gray-800">Medical Information</h2>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Department</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none bg-white">
                                            <option>Select Department</option>
                                            <option>Cardiology</option>
                                            <option>Neurology</option>
                                            <option>General Medicine</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Reason for Visit</label>
                                        <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none h-32" placeholder="Describe your symptoms or reason for appointment..."></textarea>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                             <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-gray-800">Select Date & Time</h2>
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="flex-1">
                                        <label className="text-sm font-medium text-gray-700 block mb-2">Select Date</label>
                                        <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none text-gray-600" />
                                    </div>
                                    <div className="flex-1">
                                         <label className="text-sm font-medium text-gray-700 block mb-2">Available Slots</label>
                                         <div className="grid grid-cols-3 gap-3">
                                             {['09:00 AM', '10:00 AM', '11:30 AM', '02:00 PM', '04:00 PM'].map(time => (
                                                 <button key={time} className="px-3 py-2 border rounded-lg text-sm hover:bg-primary-50 hover:border-primary-200 focus:bg-primary-600 focus:text-white focus:border-primary-600 transition">
                                                     {time}
                                                 </button>
                                             ))}
                                         </div>
                                    </div>
                                </div>
                             </div>
                        )}

                        {step === 4 && (
                            <div className="text-center py-8">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                    <Check size={40} />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Appointment Scheduled!</h2>
                                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                    Your appointment has been booked successfully. A confirmation email has been sent to your email address.
                                </p>
                                <div className="bg-gray-50 p-6 rounded-xl max-w-sm mx-auto text-left mb-8">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-500 text-sm">Date</span>
                                        <span className="font-medium">Oct 24, 2026</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-500 text-sm">Time</span>
                                        <span className="font-medium">10:00 AM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500 text-sm">Doctor</span>
                                        <span className="font-medium">Dr. Sarah Wilson</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
                        {step > 1 && step < 4 && (
                            <Button variant="secondary" onClick={prevStep}>Back</Button>
                        )}
                        {step === 1 && <div></div>} {/* Spacer */}
                        
                        {step < 4 && (
                             <Button onClick={nextStep}>
                                 {step === 3 ? 'Confirm Booking' : 'Next Step'}
                             </Button>
                        )}
                        {step === 4 && (
                            <Button className="mx-auto" onClick={() => window.location.href='/'}>Return Home</Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
