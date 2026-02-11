import React from 'react';
import { Award, Shield, Target, Users, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-24 pb-20">
            {/* Header */}
            <section className="bg-primary-50 py-16 mb-20 text-center">
                <div className="container-custom">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        About Gomti Clinic
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A premier destination for advanced dermatological and aesthetic care in Lucknow, led by expert Dr. Amita K. Agarwal.
                    </p>
                </div>
            </section>

            <div className="container-custom">
                {/* Story Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                    <div className="md:w-1/2">
                        <img 
                            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                            alt="Dr. Amita K. Agarwal" 
                            className="rounded-3xl shadow-2xl w-full" 
                        />
                    </div>
                    <div className="md:w-1/2">
                        <span className="text-primary-600 font-bold tracking-wide uppercase text-sm">Our Leader</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Dr. Amita K. Agarwal</h2>
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">MBBS, MD (Dermatology, Venereology & Leprosy)</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                             Dr. Amita K. Agarwal is a highly respected dermatologist in Lucknow known for her clinical acumen and expertise in aesthetic procedures. With a patient-centric approach, she has transformed the lives of thousands of patients suffering from skin and hair issues.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            At Gomti Clinic, she combines medical science with artistic vision to deliver safe, effective, and natural-looking results. Whether it's chronic acne, hair loss, or anti-aging needs, Dr. Amita provides personalized treatment plans for every individual.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                        <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                            <Target size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                        <p className="text-gray-600">To provide world-class dermatological care that is accessible, ethical, and effective.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                        <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center text-green-600 mb-6">
                            <Shield size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Safety First</h3>
                        <p className="text-gray-600">We use only US-FDA approved technologies and follow strict hygiene protocols.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                        <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                            <Award size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Excellence</h3>
                        <p className="text-gray-600">Committed to clinical excellence and continuous learning in the field of dermatology.</p>
                    </div>
                </div>

                {/* Clinic Info */}
                <div className="bg-primary-900 rounded-3xl p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8 mb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                         <h3 className="text-3xl font-bold mb-4">Visit Gomti Clinic</h3>
                         <div className="flex items-start gap-3 text-primary-200">
                            <MapPin className="shrink-0 mt-1" />
                            <p className="text-lg">532C/260A, Church Rd, Vishnupuri,<br/> Lucknow, Uttar Pradesh 226022</p>
                         </div>
                    </div>
                    <div className="relative z-10 flex gap-8 text-center">
                        <div>
                            <p className="text-4xl font-bold mb-2">5.0</p>
                            <div className="flex justify-center text-yellow-400 mb-1">
                                <Award size={16} fill="currentColor" />
                                <Award size={16} fill="currentColor" />
                                <Award size={16} fill="currentColor" />
                                <Award size={16} fill="currentColor" />
                                <Award size={16} fill="currentColor" />
                            </div>
                            <p className="text-primary-200 text-sm">Rating</p>
                        </div>
                         <div>
                            <p className="text-4xl font-bold mb-2">10+</p>
                            <p className="text-primary-200 text-sm">Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
