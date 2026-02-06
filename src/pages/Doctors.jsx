import React, { useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import { Search, Filter } from 'lucide-react';

const Doctors = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterSpecialty, setFilterSpecialty] = useState('All');

    const doctors = [
        { name: 'Dr. Sarah Wilson', specialty: 'Cardiologist', rating: '4.9', location: 'Main Block, Floor 2', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { name: 'Dr. James Anderson', specialty: 'Neurologist', rating: '4.8', location: 'Neuro Wing, Floor 3', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { name: 'Dr. Emily Chen', specialty: 'Pediatrician', rating: '5.0', location: 'Pediatric Center', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { name: 'Dr. Michael Brown', specialty: 'Orthopedics', rating: '4.7', location: 'Ortho Wing, Floor 1', image: 'https://images.unsplash.com/photo-1622253692010-333188c1c63b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { name: 'Dr. Linda Martinez', specialty: 'Dermatologist', rating: '4.9', location: 'Skin Center', image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { name: 'Dr. Robert Taylor', specialty: 'Cardiologist', rating: '4.8', location: 'Main Block, Floor 2', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    ];

    const specialties = ['All', ...new Set(doctors.map(d => d.specialty))];

    const filteredDoctors = doctors.filter(doc => {
        const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterSpecialty === 'All' || doc.specialty === filterSpecialty;
        return matchesSearch && matchesFilter;
    });

  return (
    <div className="pt-10 pb-20 bg-slate-50 min-h-screen">
        <section className="bg-white py-12 mb-12 shadow-sm">
            <div className="container-custom">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Find a Doctor</h1>
                
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-grow">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search by name or specialty..." 
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                    <div className="relative min-w-[200px]">
                        <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <select 
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none bg-white appearance-none"
                            value={filterSpecialty}
                            onChange={(e) => setFilterSpecialty(e.target.value)}
                        >
                            {specialties.map(spec => (
                                <option key={spec} value={spec}>{spec}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </section>

        <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredDoctors.map((doctor, index) => (
                    <DoctorCard key={index} {...doctor} />
                ))}
            </div>
            {filteredDoctors.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    <p className="text-xl">No doctors found matching your criteria.</p>
                </div>
            )}
        </div>
    </div>
  );
};

export default Doctors;
