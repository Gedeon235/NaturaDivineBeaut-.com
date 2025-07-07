import Header from '../components/Header';
import Footer from '../components/Footer';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom'; 

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />

      
      <div className="bg-white py-6 shadow-inner text-center">
        <p className="text-gray-700 text-sm">
          Envie d’en voir plus ?{' '}
          <Link
            to="/dashboard"
            className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors"
          >
            Accéder au Tableau de bord
          </Link>
        </p>
      </div>
    </div>
  );
}
