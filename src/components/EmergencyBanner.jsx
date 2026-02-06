import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import Button from './Button';

const EmergencyBanner = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="relative z-10 max-w-2xl">
                         <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Emergency Help?</h2>
                         <p className="text-blue-100 text-lg mb-8">
                             Our emergency department is open 24/7. We are here to provide immediate medical attention when you need it most.
                         </p>
                         <div className="flex flex-wrap gap-4">
                             <button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-lg flex items-center gap-2">
                                <Phone size={20} /> Call +1 (555) 911-0000
                             </button>
                             <button className="bg-blue-800 text-white border border-blue-500 px-8 py-3 rounded-xl font-bold text-lg hover:bg-blue-900 transition flex items-center gap-2">
                                <MessageCircle size={20} /> WhatsApp Chat
                             </button>
                         </div>
                    </div>
                    
                    {/* Illustration or Graphic could go here */}
                    <div className="hidden lg:block relative z-10">
                        <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                            <Phone size={40} className="text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmergencyBanner;
