import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Button from '../components/Button';

const Contact = () => {
    return (
        <div className="pt-10 pb-20">
             <section className="bg-primary-50 py-16 mb-20 text-center">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We are here to help. Reach out to us for any queries or emergency services.
                    </p>
                </div>
            </section>

            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Info Card */}
                    <div className="lg:w-1/3 space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary-50 p-3 rounded-xl text-primary-600">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Our Location</h4>
                                        <p className="text-gray-600 text-sm mt-1">123 Health Avenue, Medical District,<br />New York, NY 10001</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary-50 p-3 rounded-xl text-primary-600">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Phone Number</h4>
                                        <p className="text-gray-600 text-sm mt-1">+1 (555) 123-4567</p>
                                        <p className="text-red-500 text-sm font-bold mt-1">Emergency: 911</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary-50 p-3 rounded-xl text-primary-600">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Email Address</h4>
                                        <p className="text-gray-600 text-sm mt-1">info@medicareplus.com</p>
                                        <p className="text-gray-600 text-sm">support@medicareplus.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                         <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                             <h3 className="text-xl font-bold text-gray-900 mb-6">Opening Hours</h3>
                             <ul className="space-y-3">
                                 <li className="flex justify-between text-sm">
                                     <span className="text-gray-600">Monday - Friday</span>
                                     <span className="font-bold text-gray-900">8:00 AM - 9:00 PM</span>
                                 </li>
                                 <li className="flex justify-between text-sm">
                                     <span className="text-gray-600">Saturday</span>
                                     <span className="font-bold text-gray-900">9:00 AM - 7:00 PM</span>
                                 </li>
                                 <li className="flex justify-between text-sm">
                                     <span className="text-gray-600">Sunday</span>
                                     <span className="font-bold text-gray-900">9:00 AM - 5:00 PM</span>
                                 </li>
                             </ul>
                         </div>
                    </div>

                    {/* Form and Map */}
                    <div className="lg:w-2/3">
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-card border border-gray-100 mb-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none" />
                                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none" />
                                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none" />
                                <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none" />
                                <textarea placeholder="Message" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none h-32 md:col-span-2"></textarea>
                                <div className="md:col-span-2">
                                    <Button icon={Send}>Send Message</Button>
                                </div>
                            </form>
                        </div>

                        {/* Map Embed */}
                        <div className="rounded-2xl overflow-hidden h-80 shadow-md">
                            <iframe 
                                title="Hospital Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25986763304467!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647250000000!5m2!1sen!2s" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
