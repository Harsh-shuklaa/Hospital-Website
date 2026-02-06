import React from 'react';
import { Award, Shield, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-10 pb-20">
            {/* Header */}
            <section className="bg-primary-50 py-16 mb-20 text-center">
                <div className="container-custom">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        About MediCare+
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A legacy of excellence in healthcare, dedicated to healing with compassion and innovation since 1998.
                    </p>
                </div>
            </section>

            <div className="container-custom">
                {/* Story Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                    <div className="md:w-1/2">
                        <img 
                            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                            alt="Hospital Building" 
                            className="rounded-3xl shadow-2xl w-full" 
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Founded over 25 years ago, MediCare+ has grown from a small clinic to a multi-specialty hospital. Our commitment to patient care has remained unchanged, even as we adopt the latest medical technologies.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We believe in holistic treatment, addressing not just physical ailments but ensuring mental and emotional well-being for our patients and their families.
                        </p>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                            <Target size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                        <p className="text-gray-600">To provide accessible, affordable, and high-quality healthcare to every individual.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center text-green-600 mb-6">
                            <Shield size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                        <p className="text-gray-600">To be a global leader in medical excellence and patient-centric care.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                            <Award size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Our Values</h3>
                        <p className="text-gray-600">Integrity, Compassion, Innovation, and Excellence in everything we do.</p>
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-primary-600 rounded-3xl p-12 text-white grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
                    <div>
                        <p className="text-4xl font-bold mb-2">50+</p>
                        <p className="text-blue-100">Departments</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold mb-2">500+</p>
                        <p className="text-blue-100">Doctors</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold mb-2">10k+</p>
                        <p className="text-blue-100">Annual Surgeries</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold mb-2">24/7</p>
                        <p className="text-blue-100">Emergency Care</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
