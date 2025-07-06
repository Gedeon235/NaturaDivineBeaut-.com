import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow px-6 py-4">
      <div className="flex flex-col items-center justify-center space-y-2">
        <img src="/logo.png" alt="Logo du site" className="w-16 h-16 object-contain rounded-full" />
        <h1 className="text-2xl font-bold text-blue-600 text-center">NaturaDivineBeauté</h1>
        <p className="text-sm text-gray-600 text-center -mt-1">Révélez Votre Éclat Naturel</p>
      </div>

      <div className="flex justify-end md:hidden mt-4">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <nav className={`mt-6 md:mt-9 ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-500">Accueil</a></li>
          <li><a href="#" className="hover:text-blue-500">Boutique</a></li>
          <li><a href="#" className="hover:text-blue-500">Services</a></li>
          <li><a href="#" className="hover:text-blue-500">À propos</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact</a></li>
          <li><a href="#" className="hover:text-blue-500">Connexion</a></li>

          <div className="flex gap-3 mt-2 md:mt-0">
            <img src="/search.png" alt="recherche" className="w-6 h-6 object-contain" />
            
            <a href="/dashboard" title="Mon tableau de bord">
              <img src="/profil.png" alt="profil" className="w-6 h-6 object-contain hover:scale-110 transition-transform" />
            </a>
          </div>
        </ul>
      </nav>
    </header>
  );
}
