import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon: Icon, link }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-card transition-all duration-300 group"
    >
      <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">{title}</h3>
      <p className="text-gray-500 mb-6 leading-relaxed">{description}</p>
      <Link to={link || '#'} className="inline-flex items-center gap-2 text-primary-600 font-medium group-hover:gap-3 transition-all">
        Read More <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
