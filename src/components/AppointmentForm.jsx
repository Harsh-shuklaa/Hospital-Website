import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const AppointmentForm = () => {

    const navigate = useNavigate();
    const handleBookClick = () => {
    navigate('/booking');
    setIsOpen(false);   
  };
    return (
        <div className="bg-white rounded-2xl shadow-card p-6 md:p-8 -mt-10 lg:-mt-20 relative z-30 container-custom mx-auto max-w-5xl border border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">Book Your Consultation</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition"
                />
                <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition"
                />
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition bg-white text-gray-600 text-sm md:text-base">
                    <option value="">Select Concern</option>
                    <option value="acne">Acne / Pimples</option>
                    <option value="hairfall">Hair Fall / PRP</option>
                    <option value="laser">Laser Hair Removal</option>
                    <option value="anti-aging">Anti-Aging / Botox</option>
                    <option value="skin-glow">Skin Whitening / Glow</option>
                    <option value="other">Other</option>
                </select>
                <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition text-gray-600 text-sm md:text-base"
                />
                <Button fullWidth className="md:col-span-2 lg:col-span-1" onClick={handleBookClick}>Confirm</Button>
            </form>
        </div>
    );
};

export default AppointmentForm;
