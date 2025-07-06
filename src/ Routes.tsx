 import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Hero from './components/Hero';
import Features from './components/Features';
import MainLayout from './layouts/MainLayout';

export default function AppRoutes() {
  return (
    <Routes>
     
      <Route
        path="/"
        element={
          <MainLayout>
            <Hero />
            <Features />
          </MainLayout>
        }
      />

     
      <Route path="/dashboard" element={<Dashboard />} />

      
      <Route path="*" element={<Navigate to="Dashboard/" />} />
    </Routes>
  );
}
