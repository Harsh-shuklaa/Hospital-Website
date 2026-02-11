import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Dr. Amita', path: '/about' },
    // { name: 'Testimonials', path: '/testimonials' }, // New link
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-primary-900 p-2.5 rounded-xl text-white group-hover:bg-primary-800 transition shadow-lg shadow-primary-900/20">
             <Sparkles size={24} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold text-gray-900 leading-none tracking-tight">Gomti Clinic</span>
            <span className="text-[10px] md:text-xs text-primary-700 font-bold tracking-[0.2em] uppercase mt-1">Skin • Hair • Laser</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold hover:text-primary-700 transition-colors ${location.pathname === link.path ? 'text-primary-700' : 'text-gray-600'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden xl:flex flex-col items-end mr-2">
            <span className="text-xs text-gray-500 font-medium">Book Appointment</span>
            <span className="text-sm font-bold text-gray-900">+91 99999 99999</span>
          </div>
          <Button size="sm" icon={Calendar} className="!rounded-full px-6">Book Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 text-gray-600 hover:text-primary-900 transition" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="container-custom py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-lg font-medium text-gray-700 py-3 px-4 hover:bg-gray-50 rounded-xl transition"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="my-2 border-gray-100" />
              <div className="pt-2 flex flex-col gap-3">
                <Button className="w-full justify-center !rounded-xl" icon={Phone} variant="secondary">Call Clinic</Button>
                <Button className="w-full justify-center !rounded-xl" icon={Calendar}>Book Consultation</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
