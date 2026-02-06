import React from 'react';
import { Star, MapPin, Calendar, Clock } from 'lucide-react';
import Button from './Button';

const DoctorCard = ({ name, specialty, image, rating, location }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-card transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-white">
            <p className="flex items-center gap-1 text-sm"><Clock size={14} /> Avail: Mon-Fri</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
            <div>
                <span className="text-primary-600 text-sm font-semibold tracking-wide uppercase bg-blue-50 px-2 py-1 rounded-md">{specialty}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2">{name}</h3>
            </div>
            <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="font-bold text-gray-800">{rating}</span>
            </div>
        </div>
        
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
            <MapPin size={16} />
            {location}
        </div>

        <Button variant="outline" className="w-full !text-primary-600 !border-primary-200 hover:!bg-primary-50" icon={Calendar}>
            Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;
