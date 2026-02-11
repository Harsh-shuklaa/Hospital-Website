import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Button from '../components/Button';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us. We will get back to you shortly.');
    };

    return (
        <div className="pt-24 pb-20">
            <section className="bg-primary-50 py-16 mb-16 text-center">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Have a question or want to book an appointment? Reach out to Gomti Clinic today.
                    </p>
                </div>
            </section>

            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary-100 p-3 rounded-xl text-primary-600 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-1">Visit Us</h3>
                                    <p className="text-gray-600">
                                        532C/260A, Church Rd, Vishnupuri,<br />
                                        Lucknow, Uttar Pradesh 226022
                                    </p>
                                    <a href="https://maps.google.com/?q=Gomti+Clinic+Lucknow" target="_blank" rel="noreferrer" className="text-primary-600 font-semibold mt-2 inline-block hover:underline">
                                        View on Map
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary-100 p-3 rounded-xl text-primary-600 shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-1">Call Us</h3>
                                    <p className="text-gray-600 mb-2">For appointments and queries:</p>
                                    <a href="tel:+919999999999" className="text-lg font-bold text-gray-900 hover:text-primary-600 transition">
                                        +91 99999 99999
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary-100 p-3 rounded-xl text-primary-600 shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-1">Clinic Hours</h3>
                                    <p className="text-gray-600">Open 24 Hours</p>
                                    <p className="text-sm text-gray-500 mt-1">Walk-ins generally accepted, appointments recommended for Dr. Amita.</p>
                                </div>
                            </div>
                        </div>

                         {/* Map Embed */}
                         <div className="mt-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64">
                            <iframe 
                                title="Gomti Clinic Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1568285592833!2d80.95764837543884!3d26.898539976655554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957c5f8555555%3A0x6b4f7e5f8f8f8f8f!2sGomti%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                                width="100%" 
                                height="100%" 
                                style={{border:0}} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition" required />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition bg-white" required>
                                    <option value="">Select Treatment</option>
                                    <option value="Acne">Acne Treatment</option>
                                    <option value="Hair">Hair Fall / PRP</option>
                                    <option value="Laser">Laser Hair Removal</option>
                                    <option value="AntiAging">Anti-Aging</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition" placeholder="Tell us more about your skin concern..."></textarea>
                            </div>
                            <Button fullWidth size="lg" icon={Send} type="submit">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
