import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

const EmergencyBanner = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="bg-gradient-to-r from-primary-800 to-primary-600 rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="relative z-10 max-w-2xl text-center md:text-left">
                         <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Skin?</h2>
                         <p className="text-primary-100 text-lg mb-8">
                             Book a consultation with Dr. Amita K. Agarwal today and start your journey to healthy, glowing skin.
                         </p>
                         <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                             <a href="tel:+919999999999" className="bg-white text-primary-700 px-6 py-3 rounded-xl font-bold text-lg hover:bg-primary-50 transition shadow-lg flex items-center gap-2">
                                <Phone size={20} /> Call Now
                             </a>
                             <a href="https://wa.me/919999999999" className="bg-green-500 text-white border border-green-400 px-6 py-3 rounded-xl font-bold text-lg hover:bg-green-600 transition flex items-center gap-2">
                                <MessageCircle size={20} /> WhatsApp
                             </a>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmergencyBanner;
