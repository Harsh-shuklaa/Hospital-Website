import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center hover:bg-green-600 transition"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="white" className="text-green-500" />
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href="tel:+919999999999"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        className="bg-primary-600 text-white p-3 md:p-4 rounded-full shadow-lg shadow-primary-600/30 flex items-center justify-center hover:bg-primary-700 transition"
        title="Call Now"
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
