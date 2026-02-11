import React from 'react';
import Hero from '../components/Hero';
import AppointmentForm from '../components/AppointmentForm';
import ServiceCard from '../components/ServiceCard';
import DoctorCard from '../components/DoctorCard';
import Testimonials from '../components/Testimonials';
import EmergencyBanner from '../components/EmergencyBanner';
import { Sparkles, Zap, Droplets, Clock, ShieldCheck, Smile } from 'lucide-react';

const Home = () => {
  const services = [
    { title: 'Acne & Scar Treatment', icon: Sparkles, description: 'Advanced solutions for active acne and scar reduction using chemical peels and lasers.' },
    { title: 'Laser Hair Removal', icon: Zap, description: 'Painless and permanent hair reduction using US-FDA approved diode laser technology.' },
    { title: 'Hair Fall & PRP', icon: Droplets, description: 'Effective hair regrowth therapies including PRP and mesotherapy for thinning hair.' },
    { title: 'Anti-Aging & Botox', icon: Clock, description: 'Restore youthfulness with Botox, fillers, and thread lifts for wrinkle reduction.' },
    { title: 'Hydrafacial', icon: Droplets, description: 'Deep cleansing and hydration for instant glow and skin rejuvenation.' },
    { title: 'Skin Whitening', icon: Sparkles, description: 'Safe treatments for pigmentation, dark circles, and overall skin brightening.' },
    { title: 'Mole & Wart Removal', icon: ShieldCheck, description: 'Quick and safe removal of unwanted moles, warts, and skin tags.' },
    { title: 'Dandruff Treatment', icon: Smile, description: 'Comprehensive scalp care to eliminate dandruff and improve hair health.' },
  ];

  const doctor = { 
      name: 'Dr. Amita K. Agarwal', 
      specialty: 'Dermatologist & Cosmetologist', 
      rating: '5.0 (34 Reviews)', 
      location: 'Gomti Clinic, Lucknow', 
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
  };

  return (
    <>
      <Hero />
      <AppointmentForm />

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-primary-600 font-bold tracking-wide uppercase text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Specialized Skin & Hair Treatments</h2>
            <p className="text-gray-500 mt-4 text-lg">We provide comprehensive dermatological care tailored to your unique skin needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Doctor */}
      <section className="py-20 bg-white">
        <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                    <img 
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Dr. Amita K. Agarwal" 
                        className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
                    />
                </div>
                <div className="lg:w-1/2">
                    <span className="text-primary-600 font-bold tracking-wide uppercase text-sm">Meet Our Expert</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Dr. Amita K. Agarwal</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        MBBS, MD (Dermatology, Venereology & Leprosy). Dr. Amita is a renowned dermatologist in Lucknow with over 10 years of experience in clinical and aesthetic dermatology.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        She specializes in advanced laser treatments, anti-aging procedures, and treating chronic skin conditions. Her approach combines medical expertise with artistic precision to deliver natural-looking results.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                            <h4 className="text-2xl font-bold text-primary-700">10+</h4>
                            <p className="text-gray-500">Years Experience</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-primary-700">5000+</h4>
                            <p className="text-gray-500">Happy Patients</p>
                        </div>
                    </div>

                    <DoctorCard {...doctor} />
                </div>
            </div>
        </div>
      </section>

      <Testimonials />

      <EmergencyBanner />
    </>
  );
};

export default Home;
