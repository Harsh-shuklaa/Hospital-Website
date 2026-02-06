import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Activity } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-primary-700 px-4 py-2 rounded-full font-medium text-sm mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
                </span>
                24/7 Emergency Service Available
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Trusted Healthcare <br />
                <span className="text-primary-600">for Your Family</span>
              </h1>
              <p className="text-lg text-gray-600 mt-6 max-w-xl">
                We provide world-class medical services with state-of-the-art facilities and a team of dedicated experts committed to your well-being.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg">Book Appointment</Button>
              <Button size="lg" variant="secondary">Video Consultation</Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white shadow-md rounded-full text-primary-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">20+</p>
                  <p className="text-sm text-gray-500">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white shadow-md rounded-full text-primary-600">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-500">Medical Experts</p>
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Medical Team" 
              className="relative z-10 w-full h-auto rounded-3xl shadow-2xl" 
            />

            {/* Floating Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs z-20"
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <Activity size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Success Rate</p>
                  <p className="text-xs text-gray-500 mb-2">Based on patient recoveries</p>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full rounded-full w-[98%]"></div>
                  </div>
                  <p className="text-right text-sm font-bold text-green-600 mt-1">98.5%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
