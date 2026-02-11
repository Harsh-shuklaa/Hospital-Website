import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary-500 p-2 rounded-lg text-white">
                <Sparkles size={24} />
              </div>
              <div>
                <span className="text-xl font-bold text-white block leading-none">Gomti Clinic</span>
                <span className="text-xs text-primary-400 font-bold tracking-widest uppercase">Skin • Hair • Laser</span>
              </div>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed text-sm">
              Dr. Amita K. Agarwal's specialized clinic for advanced dermatology, cosmetology, and laser treatments. Restoring confidence through healthy skin.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition text-white hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition text-white hover:-translate-y-1">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition text-white hover:-translate-y-1">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary-500 rounded-full"></span> Treatments
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-primary-400 transition hover:pl-1 flex items-center gap-1">Acne & Scar Treatment</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition hover:pl-1 flex items-center gap-1">Laser Hair Removal</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition hover:pl-1 flex items-center gap-1">Hair Fall & PRP</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition hover:pl-1 flex items-center gap-1">Anti-Aging & Botox</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition hover:pl-1 flex items-center gap-1">Hydrafacial</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition hover:pl-1 flex items-center gap-1">Skin Whitening</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary-500 rounded-full"></span> Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-primary-400 transition hover:pl-1">About Dr. Amita</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary-400 transition hover:pl-1">Patient Reviews</Link></li>
              <li><Link to="/booking" className="hover:text-primary-400 transition hover:pl-1">Book Appointment</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition hover:pl-1">Contact Clinic</Link></li>
              <li><Link to="#" className="hover:text-primary-400 transition hover:pl-1">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary-500 rounded-full"></span> Visit Us
            </h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <div className="bg-slate-800 p-2 rounded-lg text-primary-400 shrink-0">
                    <MapPin size={18} />
                </div>
                <span>532C/260A, Church Rd,<br />Vishnupuri, Lucknow,<br />Uttar Pradesh 226022</span>
              </li>
              <li className="flex items-center gap-4">
                 <div className="bg-slate-800 p-2 rounded-lg text-primary-400 shrink-0">
                    <Phone size={18} />
                </div>
                <span>+91 99999 99999</span>
              </li>
              <li className="flex items-start gap-4">
                 <div className="bg-slate-800 p-2 rounded-lg text-primary-400 shrink-0">
                    <Clock size={18} />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Open 24 Hours</p>
                  <p className="text-xs text-slate-500">Walk-ins Welcome</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Gomti Clinic Lucknow. All rights reserved.</p>
          <p>Designed with Care</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
