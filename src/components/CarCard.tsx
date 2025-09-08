import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../types/Car';
import { Calendar, Gauge, Fuel, SwissFrancIcon as Transmission } from 'lucide-react';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <Link to={`/car/${car.id}`} className="group">
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <img
            src={car.imageUrl}
            alt={`${car.make} ${car.model}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ${car.price.toLocaleString()}
          </div>
        </div>

        <div className="p-6">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
              {car.year} {car.make} {car.model}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{car.color}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-gray-400" />
              <span>{car.year}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Gauge className="h-4 w-4 text-gray-400" />
              <span>{car.mileage.toLocaleString()} mi</span>
            </div>
            <div className="flex items-center space-x-2">
              <Fuel className="h-4 w-4 text-gray-400" />
              <span>{car.fuelType}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Transmission className="h-4 w-4 text-gray-400" />
              <span>{car.transmission}</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-600 line-clamp-2">{car.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}