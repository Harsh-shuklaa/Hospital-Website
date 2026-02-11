import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Priya Sharma",
            treatment: "Acne Treatment",
            rating: 5,
            text: "Dr. Amita is a magician! I struggled with severe acne for years. Her treatment plan cleared my skin in just 3 months. Highly recommended for anyone with skin issues.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Rahul Verma",
            treatment: "Hair Transplant / PRP",
            rating: 5,
            text: "Best clinic for hair treatment in Lucknow. I took PRP sessions for hair thinning and saw visible results after the 3rd session. The staff is very professional.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Anjali Gupta",
            treatment: "Laser Hair Removal",
            rating: 5,
            text: "I got laser hair removal done here. It was completely painless and the results are amazing. The hygiene standards at Gomti Clinic are top-notch.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Amit Singh",
            treatment: "Scar Removal",
            rating: 5,
            text: "visited for an old injury scar on my face. Dr. Amita suggested laser resurfacing, and the scar is barely visible now. Thank you Gomti Clinic!",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="text-primary-600 font-bold tracking-wide uppercase text-sm">Patient Stories</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Our Patients Say</h2>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <div className="flex text-yellow-400">
                             {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                        </div>
                        <span className="font-bold text-gray-700">5.0 (34 Google Reviews)</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div 
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
                        >
                            <Quote size={40} className="text-primary-100 absolute top-6 right-8" />
                            <div className="flex items-center gap-4 mb-6">
                                <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary-50" />
                                <div>
                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                    <p className="text-sm text-primary-600 font-medium">{review.treatment}</p>
                                    <div className="flex text-yellow-400 mt-1">
                                        {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">"{review.text}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
