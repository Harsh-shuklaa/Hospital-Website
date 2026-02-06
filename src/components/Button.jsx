import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/30',
  secondary: 'bg-white text-primary-700 border border-primary-100 hover:bg-primary-50',
  outline: 'bg-transparent text-white border border-white/30 hover:bg-white/10',
  danger: 'bg-red-500 text-white hover:bg-red-600'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  type = 'button',
  fullWidth = false,
  icon: Icon
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''}
        ${className}
        inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors duration-200
      `}
      onClick={onClick}
    >
      {Icon && <Icon size={20} />}
      {children}
    </motion.button>
  );
};

export default Button;
