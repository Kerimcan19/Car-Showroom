import React from 'react';
import { Car } from '../types/Car';
import CarCard from './CarCard';
import { Search, Filter } from 'lucide-react';

interface HomePageProps {
  cars: Car[];
}

export default function HomePage({ cars }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Japanese Vehicles
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Discover our collection of exceptional Japanese performance and luxury vehicles
            </p>
          </div>
        </div>
      </div>

      {/* Cars Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Our Collection</h2>
            <p className="text-gray-600 mt-1">{cars.length} vehicles available</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Search className="h-4 w-4" />
              <span className="hidden sm:block">Search</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="h-4 w-4" />
              <span className="hidden sm:block">Filter</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {cars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No vehicles available at the moment.</p>
            <p className="text-gray-400 mt-2">Please check back soon for new arrivals.</p>
          </div>
        )}
      </div>
    </div>
  );
}