export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  color: string;
  transmission: 'Manual' | 'Automatic' | 'CVT';
  fuelType: 'Gasoline' | 'Hybrid' | 'Electric';
  engine: string;
  horsepower: number;
  imageUrl: string;
  description: string;
  features: string[];
}

export interface Admin {
  username: string;
  password: string;
}