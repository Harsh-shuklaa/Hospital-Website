import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Heart, Brain, Bone, Baby, Stethoscope, Microscope, Search, Activity, Eye, Pill, Syringe, Ambulance } from 'lucide-react';

const Services = () => {
  const allServices = [
    { title: 'Cardiology', icon: Heart, description: 'Comprehensive heart care services using the latest technology and treatments.' },
    { title: 'Neurology', icon: Brain, description: 'Expert diagnosis and treatment for disorders of the nervous system.' },
    { title: 'Orthopedics', icon: Bone, description: 'Advanced bone and joint care for patients of all ages.' },
    { title: 'Pediatrics', icon: Baby, description: 'Specialized medical care for infants, children, and adolescents.' },
    { title: 'General Medicine', icon: Stethoscope, description: 'Primary healthcare services for prevention and treatment of illnesses.' },
    { title: 'Laboratory', icon: Microscope, description: 'High-tech internal diagnostics offering quick and accurate results.' },
    { title: 'Radiology', icon: Activity, description: 'State-of-the-art imaging services (MRI, CT, X-Ray) for precise diagnosis.' },
    { title: 'Checkups', icon: Search, description: 'Comprehensive health screening packages for preventative care.' },
    { title: 'Ophthalmology', icon: Eye, description: 'Complete eye care ranging from routine exams to complex surgeries.' },
    { title: 'Pharmacy', icon: Pill, description: '24/7 in-house pharmacy with home delivery options.' },
    { title: 'Vaccination', icon: Syringe, description: 'Immunization programs for children and adults.' },
    { title: 'Emergency', icon: Ambulance, description: 'Round-the-clock emergency medical services.' },
  ];

  return (
    <div className="pt-10 pb-20">
        <section className="bg-primary-50 py-16 mb-16 text-center">
            <div className="container-custom">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Medical Services</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Cutting-edge medical solutions provided by expert specialists.
                </p>
            </div>
        </section>

        <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                {allServices.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>

            {/* Health Packages / Pricing (Simple Table) */}
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Health Checkup Packages</h2>
                <p className="text-gray-600">Preventative care designed for your specific needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic */}
                <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Basic Health Check</h3>
                    <p className="text-4xl font-bold text-primary-600 mb-6">$99</p>
                    <ul className="space-y-3 mb-8 text-gray-600 text-left">
                        <li>• Complete Blood Count</li>
                        <li>• Blood Sugar Fasting</li>
                        <li>• Lipid Profile</li>
                        <li>• Kidney Function Test</li>
                        <li>• Doctor Consultation</li>
                    </ul>
                    <button className="w-full py-3 rounded-xl border border-primary-600 text-primary-600 font-bold hover:bg-primary-50 transition">Book Now</button>
                </div>
                
                {/* Standard (Featured) */}
                <div className="border-2 border-primary-500 rounded-2xl p-8 shadow-xl relative scale-105 bg-white">
                    <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">MOST POPULAR</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Standard Checkup</h3>
                    <p className="text-4xl font-bold text-primary-600 mb-6">$199</p>
                    <ul className="space-y-3 mb-8 text-gray-600 text-left">
                        <li>• All Basic Tests</li>
                        <li>• Liver Function Test</li>
                        <li>• Thyroid Profile</li>
                        <li>• Chest X-Ray</li>
                        <li>• ECG</li>
                        <li>• Dental Checkup</li>
                    </ul>
                    <button className="w-full py-3 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition shadow-lg">Book Now</button>
                </div>

                {/* Premium */}
                <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Care</h3>
                    <p className="text-4xl font-bold text-primary-600 mb-6">$350</p>
                    <ul className="space-y-3 mb-8 text-gray-600 text-left">
                        <li>• All Standard Tests</li>
                        <li>• Cardiac Screening (Echo)</li>
                        <li>• Vitamin Profile</li>
                        <li>• Cancer Markers</li>
                        <li>• Dietician Consultation</li>
                    </ul>
                    <button className="w-full py-3 rounded-xl border border-primary-600 text-primary-600 font-bold hover:bg-primary-50 transition">Book Now</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Services;
