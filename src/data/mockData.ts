import { Car, Admin } from '../types/Car';

export const mockCars: Car[] = [
  {
    id: '1',
    make: 'Subaru',
    model: 'WRX STI',
    year: 2023,
    price: 42500,
    mileage: 1200,
    color: 'World Rally Blue',
    transmission: 'Manual',
    fuelType: 'Gasoline',
    engine: '2.5L Turbocharged Boxer',
    horsepower: 310,
    imageUrl: '/images/1.jpg',
    description: 'The legendary Subaru WRX STI delivers rally-bred performance with its turbocharged boxer engine and signature all-wheel drive system.',
    features: ['All-Wheel Drive', 'Brembo Brakes', 'Sport-Tuned Suspension', 'STI Performance Package', 'Recaro Seats']
  },
  {
    id: '2',
    make: 'Nissan',
    model: 'GT-R',
    year: 2024,
    price: 118990,
    mileage: 350,
    color: 'Gun Metallic',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    engine: '3.8L Twin-Turbo V6',
    horsepower: 565,
    imageUrl: '/images/2.jpg',
    description: 'The Nissan GT-R is a supercar that combines cutting-edge technology with raw power, delivering incredible performance on both track and street.',
    features: ['ATTESA E-TS AWD', 'Launch Control', 'Bilstein DampTronic', 'Carbon Fiber Roof', 'Premium Interior']
  },
  {
    id: '3',
    make: 'Honda',
    model: 'Civic Type R',
    year: 2023,
    price: 43895,
    mileage: 890,
    color: 'Championship White',
    transmission: 'Manual',
    fuelType: 'Gasoline',
    engine: '2.0L Turbocharged',
    horsepower: 315,
    imageUrl: '/images/3.png',
    description: 'The Honda Civic Type R represents the pinnacle of front-wheel-drive performance with track-inspired engineering and aggressive styling.',
    features: ['Adaptive Damper System', 'Limited Slip Differential', 'Brembo Brakes', '+R Mode', 'Alcantara Seats']
  },
  {
    id: '4',
    make: 'Toyota',
    model: 'GR Supra',
    year: 2024,
    price: 56500,
    mileage: 450,
    color: 'Nitro Yellow',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    engine: '3.0L Turbocharged Inline-6',
    horsepower: 382,
    imageUrl: '/images/4.jpg',
    description: 'The Toyota GR Supra returns as a pure sports car, offering exceptional balance, precision, and thrilling rear-wheel-drive dynamics.',
    features: ['Adaptive Variable Suspension', 'Active Differential', 'Launch Control', 'Track Mode', 'Premium Audio']
  },
  {
    id: '5',
    make: 'Mazda',
    model: 'MX-5 Miata',
    year: 2023,
    price: 32300,
    mileage: 750,
    color: 'Soul Red Crystal',
    transmission: 'Manual',
    fuelType: 'Gasoline',
    engine: '2.0L SKYACTIV-G',
    horsepower: 181,
    imageUrl: '/images/5.jpg',
    description: 'The Mazda MX-5 Miata embodies the pure joy of driving with its lightweight design, perfect balance, and driver-focused experience.',
    features: ['50/50 Weight Distribution', 'SKYACTIV Technology', 'Brembo Brakes', 'Sport Mode', 'Premium Interior']
  },
  {
    id: '6',
    make: 'Subaru',
    model: 'Outback',
    year: 2024,
    price: 37895,
    mileage: 1100,
    color: 'Magnetite Gray Metallic',
    transmission: 'CVT',
    fuelType: 'Gasoline',
    engine: '2.5L BOXER',
    horsepower: 182,
    imageUrl: '/images/6.jpg',
    description: 'The Subaru Outback combines SUV capability with car-like comfort, featuring standard all-wheel drive and impressive ground clearance.',
    features: ['Symmetrical AWD', 'X-Mode', 'EyeSight Safety Suite', 'Roof Rails', 'Leather Seating']
  }
];

export const adminCredentials: Admin = {
  username: 'admin',
  password: 'admin123'
};