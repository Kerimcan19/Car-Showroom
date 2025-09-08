import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Car } from '../types/Car';
import { ArrowLeft, Calendar, Gauge, Fuel, SwissFrancIcon as Transmission, Zap, Palette, CheckCircle } from 'lucide-react';

interface CarDetailsProps {
  cars: Car[];
}

export default function CarDetails({ cars }: CarDetailsProps) {
  const { id } = useParams<{ id: string }>();
  const car = cars.find(c => c.id === id);

  if (!car) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Not Found</h1>
          <p className="text-gray-600 mb-6">The vehicle you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Gallery</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-blue-700 hover:text-blue-800 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Gallery</span>
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-96 lg:h-full">
              <img
                src={car.imageUrl}
                alt={`${car.make} ${car.model}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 right-6 bg-blue-700 text-white px-4 py-2 rounded-full text-lg font-bold">
                ${car.price.toLocaleString()}
              </div>
            </div>

            {/* Details Section */}
            <div className="p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {car.year} {car.make} {car.model}
                </h1>
                <p className="text-xl text-gray-600">{car.color}</p>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">{car.description}</p>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Year</p>
                    <p className="font-semibold">{car.year}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Gauge className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Mileage</p>
                    <p className="font-semibold">{car.mileage.toLocaleString()} mi</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Fuel className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Fuel Type</p>
                    <p className="font-semibold">{car.fuelType}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Transmission className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Transmission</p>
                    <p className="font-semibold">{car.transmission}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Engine</p>
                    <p className="font-semibold">{car.engine}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Palette className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Horsepower</p>
                    <p className="font-semibold">{car.horsepower} HP</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="space-y-3">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors font-semibold">
                  Contact Dealer
                </button>
                <button className="flex-1 border border-blue-700 text-blue-700 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                  Schedule Test Drive
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}