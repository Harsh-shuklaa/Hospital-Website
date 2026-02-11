import React from 'react';
import { Calendar, Award, Star, GraduationCap, MapPin } from 'lucide-react';
import Button from '../components/Button';

const Doctors = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-primary-50 py-16 mb-16 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Expert</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Gomti Clinic is led by Dr. Amita K. Agarwal, a gold-medalist dermatologist with a passion for clinical and aesthetic excellence.
          </p>
        </div>
      </section>

      <div className="container-custom">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
            {/* Image Side */}
            <div className="lg:w-2/5 relative">
                <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Dr. Amita K. Agarwal" 
                    className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                    <h2 className="text-3xl font-bold">Dr. Amita K. Agarwal</h2>
                    <p className="text-primary-200 font-medium">Dermatologist & Cosmetologist</p>
                </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-3/5 p-8 md:p-12">
                <div className="flex flex-wrap gap-4 mb-8">
                    <div className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
                        <GraduationCap size={18} /> MBBS, MD (Dermatology)
                    </div>
                    <div className="bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
                        <Star size={18} /> 4.9/5 Patient Rating
                    </div>
                    <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
                        <Award size={18} /> 10+ Years Exp.
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">About Dr. Amita</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                    Dr. Amita K. Agarwal is a distinguished dermatologist specializing in both clinical dermatology and aesthetic procedures. With a strong academic background and years of hands-on experience, she is dedicated to providing evidence-based treatments for skin, hair, and nail concerns.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                    She is a member of the Indian Association of Dermatologists, Venereologists and Leprologists (IADVL) and regularly participates in national conferences to stay updated with the latest advancements in dermatology. Her clinic, Gomti Clinic, is equipped with state-of-the-art lasers and technology to ensure the best possible outcomes for her patients.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Areas of Expertise</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                    {['Acne & Scar Management', 'Laser Hair Reduction', 'Anti-Aging Therapies', 'Pigmentation Treatment', 'Hair Restoration (PRP)', 'Pediatric Dermatology'].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                             <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                             {item}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                     <Button size="lg" icon={Calendar} onClick={() => window.location.href='/booking'}>Book Appointment</Button>
                     <Button size="lg" variant="outline" onClick={() => window.location.href='/contact'}>Get Directions</Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
