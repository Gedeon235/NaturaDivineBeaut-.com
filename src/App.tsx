import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './pages/Dashboard'; // 👈 vue complète avec sidebar (page)

export default function App() {
  return (
    <BrowserRouter>
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

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
