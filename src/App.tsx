import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Car } from './types/Car';
import { mockCars, adminCredentials } from './data/mockData';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CarDetails from './components/CarDetails';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [cars, setCars] = useState<Car[]>(mockCars);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = () => {
    setIsAdmin(true);
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  const handleAddCar = (newCarData: Omit<Car, 'id'>) => {
    const newCar: Car = {
      ...newCarData,
      id: Date.now().toString()
    };
    setCars(prev => [...prev, newCar]);
  };

  return (
    <Router>
      <div className="App">
        <Header isAdmin={isAdmin} onLogout={handleLogout} />
        
        <Routes>
          <Route 
            path="/" 
            element={<HomePage cars={cars} />} 
          />
          <Route 
            path="/car/:id" 
            element={<CarDetails cars={cars} />} 
          />
          <Route 
            path="/admin/login" 
            element={
              isAdmin ? (
                <Navigate to="/admin/dashboard" replace />
              ) : (
                <AdminLogin 
                  adminCredentials={adminCredentials}
                  onLogin={handleLogin}
                />
              )
            } 
          />
          <Route 
            path="/admin/dashboard" 
            element={
              isAdmin ? (
                <AdminDashboard cars={cars} onAddCar={handleAddCar} />
              ) : (
                <Navigate to="/admin/login" replace />
              )
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;