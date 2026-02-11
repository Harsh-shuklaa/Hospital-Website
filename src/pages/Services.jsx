import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Sparkles, Zap, Droplets, Clock, ShieldCheck, Smile, Sun, UserCheck, Syringe, TestTube, Microscope, HeartPulse } from 'lucide-react';

const Services = () => {
  const aestheticServices = [
    { title: 'Acne & Scar Treatment', icon: Sparkles, description: 'Customized peels and laser resurfacing for active acne and deep scars.' },
    { title: 'Laser Hair Removal', icon: Zap, description: 'Full body laser hair reduction using advanced diode technology.' },
    { title: 'Hydrafacial', icon: Droplets, description: 'Multi-step treatment to cleanse, exfoliate, and hydrate skin.' },
    { title: 'Anti-Aging & Botox', icon: Syringe, description: 'Botox, fillers, and thread lifts to reduce wrinkles and restore volume.' },
    { title: 'Skin Whitening', icon: Sun, description: 'Glutathione and laser toning for even skin tone and glow.' },
    { title: 'PRP Therapy', icon: TestTube, description: 'Platelet-Rich Plasma therapy for hair regrowth and skin rejuvenation.' },
  ];

  const clinicalServices = [
    { title: 'Hair Fall Treatment', icon: UserCheck, description: 'Medical management of alopecia and severe hair loss.' },
    { title: 'Dandruff Treatment', icon: Smile, description: 'Effective solutions for seborrheic dermatitis and scalp issues.' },
    { title: 'Mole & Wart Removal', icon: ShieldCheck, description: 'Radiofrequency ablation for safe removal of skin growths.' },
    { title: 'Pigmentation', icon: Microscope, description: 'Treatment for melasma, freckles, and sun spots.' },
    { title: 'Eczema & Psoriasis', icon: HeartPulse, description: 'Management of chronic skin conditions and allergies.' },
    { title: 'Nail Surgery', icon: Clock, description: 'Treatment for ingrown toe nails and fungal infections.' },
  ];

  return (
    <div className="pt-24 pb-20">
        <section className="bg-primary-50 py-16 mb-16 text-center">
            <div className="container-custom">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Comprehensive clinical and aesthetic dermatology services designed for your unique needs.
                </p>
            </div>
        </section>

        <div className="container-custom">
            
            {/* Aesthetic Services */}
            <div className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                     <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                        <Sparkles size={28} />
                     </div>
                     <h2 className="text-3xl font-bold text-gray-900">Aesthetic & Laser Treatments</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {aestheticServices.map((service, index) => (
                        <ServiceCard key={index} {...service} link="/contact" />
                    ))}
                </div>
            </div>

            {/* Clinical Services */}
            <div className="mb-20">
                 <div className="flex items-center gap-4 mb-8">
                     <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                        <LogoMedical size={28} />
                     </div>
                     <h2 className="text-3xl font-bold text-gray-900">Clinical Dermatology</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clinicalServices.map((service, index) => (
                        <ServiceCard key={index} {...service} link="/contact" />
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-primary-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-4">Unsure what you need?</h2>
                    <p className="text-primary-100 mb-8 max-w-2xl mx-auto">Book a consultation with Dr. Amita K. Agarwal to get a personalized treatment plan for your skin and hair concerns.</p>
                    <button onClick={() => window.location.href='/booking'} className="bg-white text-primary-900 px-8 py-3 rounded-xl font-bold hover:bg-primary-50 transition">Book Consultation</button>
                </div>
            </div>
        </div>
    </div>
  );
};

const LogoMedical = ({size}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"/><path d="M12 9v6"/><path d="M9 12h6"/></svg>
);

export default Services;
