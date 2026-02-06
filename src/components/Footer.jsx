import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary-500 p-2 rounded-lg text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"/><path d="M12 9v6"/><path d="M9 12h6"/></svg>
              </div>
              <span className="text-2xl font-bold text-white">MediCare+</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Serving the community with advanced medical care and compassion. Your health is our priority, and we are dedicated to providing the best treatments available.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-primary-400 transition">About Us</Link></li>
              <li><Link to="/doctors" className="hover:text-primary-400 transition">Our Doctors</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition">Services</Link></li>
              <li><Link to="/booking" className="hover:text-primary-400 transition">Book Appointment</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-primary-400 transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Departments</h3>
            <ul className="space-y-3">
              <li><Link to="/services/cardiology" className="hover:text-primary-400 transition">Cardiology</Link></li>
              <li><Link to="/services/neurology" className="hover:text-primary-400 transition">Neurology</Link></li>
              <li><Link to="/services/orthopedics" className="hover:text-primary-400 transition">Orthopedics</Link></li>
              <li><Link to="/services/pediatrics" className="hover:text-primary-400 transition">Pediatrics</Link></li>
              <li><Link to="/services/dental" className="hover:text-primary-400 transition">Dental Care</Link></li>
              <li><Link to="/services/ophthalmology" className="hover:text-primary-400 transition">Ophthalmology</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-400 mt-1 shrink-0" size={18} />
                <span>123 Medical Center Drive,<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-400 shrink-0" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-400 shrink-0" size={18} />
                <span>info@medicareplus.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-primary-400 mt-1 shrink-0" size={18} />
                <div>
                  <p>Mon - Fri: 8:00 AM - 9:00 PM</p>
                  <p>Sat - Sun: 9:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MediCare+ Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
