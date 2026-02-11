import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, CheckCircle, User, FileText, Clock } from 'lucide-react';
import Button from '../components/Button';

const Booking = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const navigate = useNavigate();

  const nextStep = () => setStep(step < totalSteps ? step + 1 : step);
  const prevStep = () => setStep(step > 1 ? step - 1 : step);

  const steps = [
    { id: 1, title: 'Personal Details', icon: User },
    { id: 2, title: 'Concern Info', icon: FileText },
    { id: 3, title: 'Date & Time', icon: Clock },
    { id: 4, title: 'Confirmation', icon: CheckCircle },
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Book Appointment</h1>
            <p className="text-gray-600 mt-2">Schedule your consultation with Dr. Amita K. Agarwal</p>
          </div>

          {/* Stepper */}
          <div className="mb-10 relative">
             <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-0 -translate-y-1/2 rounded-full"></div>
             <div className="absolute top-1/2 left-0 h-1 bg-primary-500 -z-0 -translate-y-1/2 rounded-full transition-all duration-500" style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}></div>
             
             <div className="flex justify-between relative z-10">
                {steps.map((s) => (
                    <div key={s.id} className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-4 ${step >= s.id ? 'bg-primary-600 border-white text-white shadow-lg' : 'bg-white border-gray-100 text-gray-400'}`}>
                            {step > s.id ? <CheckCircle size={18} /> : s.id}
                        </div>
                        <span className={`text-xs font-semibold mt-2 hidden sm:block ${step >= s.id ? 'text-primary-700' : 'text-gray-400'}`}>{s.title}</span>
                    </div>
                ))}
             </div>
          </div>

          {/* Form Content */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 overflow-hidden relative min-h-[400px]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {step === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none" placeholder="+91 98765 43210" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none" placeholder="Lucknow" />
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical Concern</h2>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none bg-white">
                                    <option>General Dermatology</option>
                                    <option>Cosmetic Dermatology</option>
                                    <option>Laser Treatment</option>
                                    <option>Hair Treatment</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Symptom / Concern</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none" placeholder="Briefly describe your skin or hair issue..."></textarea>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Preferred Slot</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none bg-white">
                                        <option>Morning (10 AM - 1 PM)</option>
                                        <option>Afternoon (2 PM - 5 PM)</option>
                                        <option>Evening (6 PM - 9 PM)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-xl flex gap-3 items-start">
                                <Clock className="text-blue-600 mt-1 shrink-0" size={20} />
                                <p className="text-sm text-blue-800">Note: This is a request for an appointment. Our clinic coordinator will call you to confirm the exact time based on availability.</p>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="text-center py-10">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                                <CheckCircle size={40} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Submitted!</h2>
                            <p className="text-lg text-gray-600 max-w-lg mx-auto mb-8">
                                Thank you for choosing Gomti Clinic. Your appointment request has been received. We will contact you shortly to confirm your slot.
                            </p>
                            <Button onClick={() => navigate('/')} size="lg">Back to Home</Button>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          {step < 4 && (
             <div className="flex justify-between mt-8">
                <Button variant="secondary" onClick={prevStep} disabled={step === 1} className={step === 1 ? 'opacity-0 pointer-events-none' : ''}>Previous</Button>
                <Button onClick={nextStep}>{step === 3 ? 'Confirm Booking' : 'Next Step'}</Button>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
