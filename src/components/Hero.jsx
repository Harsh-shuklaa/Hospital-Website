import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Calendar } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary-50 to-white pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white border border-primary-100 text-primary-800 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 shadow-sm mx-auto lg:mx-0">
                <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                Top Rated Dermatologist in Lucknow
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Advanced <span className="text-primary-600">Skin, Hair & Laser</span> Treatments
              </h1>
              <p className="text-lg text-gray-600 mt-6 max-w-xl mx-auto lg:mx-0">
                Restore your confidence with expert care from <span className="font-bold text-gray-900">Dr. Amita K. Agarwal</span>. We offer world-class dermatology services using the latest technology in a safe and comfortable environment.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" icon={Calendar}>Book Appointment</Button>
              <Button size="lg" variant="secondary" onClick={() => window.location.href='tel:+919999999999'}>Call Now</Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-8 pt-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-4">
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="Reviewer" />
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="Reviewer" />
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64" alt="Reviewer" />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-100 flex items-center justify-center text-xs font-bold text-primary-800">+30</div>
                </div>
                <div className="text-left">
                  <div className="flex items-center text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                  <p className="text-sm font-bold text-gray-900">5.0 Rating</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image/Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative hidden md:block"
          >
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Dr. Amita K. Agarwal" 
              className="relative z-10 w-full max-w-md mx-auto rounded-[2rem] shadow-2xl border-4 border-white object-cover aspect-[3/4]" 
            />

            {/* Floating Tag */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 -left-4 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 z-20"
            >
              <div className="bg-primary-100 p-2 rounded-full text-primary-600">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">FDA Approved</p>
                <p className="text-xs text-gray-500">Safe Procedures</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
