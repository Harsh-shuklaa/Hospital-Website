import React from 'react';
import Hero from '../components/Hero';
import AppointmentForm from '../components/AppointmentForm';
import ServiceCard from '../components/ServiceCard';
import DoctorCard from '../components/DoctorCard';
import EmergencyBanner from '../components/EmergencyBanner';
import { Heart, Brain, Bone, Baby, Stethoscope, Microscope, Search, Activity } from 'lucide-react';

const Home = () => {
  const services = [
    { title: 'Cardiology', icon: Heart, description: 'Comprehensive heart care services using the latest technology and treatments.' },
    { title: 'Neurology', icon: Brain, description: 'Expert diagnosis and treatment for disorders of the nervous system.' },
    { title: 'Orthopedics', icon: Bone, description: 'Advanced bone and joint care for patients of all ages.' },
    { title: 'Pediatrics', icon: Baby, description: 'Specialized medical care for infants, children, and adolescents.' },
    { title: 'General Medicine', icon: Stethoscope, description: 'Primary healthcare services for prevention and treatment of illnesses.' },
    { title: 'Laboratory', icon: Microscope, description: 'High-tech internal diagnostics offering quick and accurate results.' },
    { title: 'Radiology', icon: Activity, description: 'State-of-the-art imaging services (MRI, CT, X-Ray) for precise diagnosis.' },
    { title: 'Checkups', icon: Search, description: 'Comprehensive health screening packages for preventative care.' },
  ];

  const doctors = [
    { name: 'Dr. Sarah Wilson', specialty: 'Cardiologist', rating: '4.9', location: 'Main Block, Floor 2', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Dr. James Anderson', specialty: 'Neurologist', rating: '4.8', location: 'Neuro Wing, Floor 3', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Dr. Emily Chen', specialty: 'Pediatrician', rating: '5.0', location: 'Pediatric Center', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Dr. Michael Brown', specialty: 'Orthopedics', rating: '4.7', location: 'Ortho Wing, Floor 1', image: 'https://images.unsplash.com/photo-1622253692010-333188c1c63b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <>
      <Hero />
      <AppointmentForm />

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-primary-600 font-bold tracking-wide uppercase text-sm">Our Departments</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Comprehensive Medical Services</h2>
            <p className="text-gray-500 mt-4 text-lg">We offer a wide range of specialized medical services to ensure you receive the best possible care under one roof.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div className="max-w-2xl">
                    <span className="text-primary-600 font-bold tracking-wide uppercase text-sm">Our Doctors</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Meet Our Specialists</h2>
                    <p className="text-gray-500 mt-4 text-lg">Top-rated doctors dedicated to providing excellent healthcare.</p>
                </div>
                <button className="text-primary-600 font-bold hover:text-primary-700 transition flex items-center gap-2">View All Doctors &rarr;</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {doctors.map((doctor, index) => (
                    <DoctorCard key={index} {...doctor} />
                ))}
            </div>
        </div>
      </section>

      <EmergencyBanner />
    </>
  );
};

export default Home;
