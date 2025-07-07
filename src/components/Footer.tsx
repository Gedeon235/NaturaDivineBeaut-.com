import { useState } from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  const [expanded, setExpanded] = useState(false);

  const text = `NaturaDivineBeauté n'est pas qu'une simple marque ; elle est le fruit d'une passion profonde pour la beauté naturelle et d'une révélation personnelle. Durant des années, j'ai cherché des produits cosmétiques qui allient réellement l'efficacité à la pureté des ingrédients, sans compromis sur la santé ou l'éthique. Ce cheminement m'a menée à un constat, simple mais puissant : la nature luxuriante du Tchad`;

  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
     
        
        <div>
          <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full object-contain mb-2" />
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <p className={expanded ? '' : 'line-clamp-6'}>
                {text}
              </p>
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-1 text-blue-400 hover:underline"
              >
                {expanded ? 'Voir moins' : 'Lire la suite'}
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Vente des produits</a></li>
            <li><a href="#">Maquillage</a></li>
            <li><a href="#">Massage</a></li>
            <li><a href="#">Manicure/Pédicure</a></li>
            <li><a href="#">Coiffure</a></li>
            <li><a href="#">Soins du visage</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-3">À propos</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Notre Histoire</a></li>
            <li><a href="#">Notre Mission</a></li>
            <li><a href="#">Notre Équipe</a></li>
            <li><a href="#">Nos Valeurs</a></li>
            <li><a href="#">Témoignages</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-3">Liens rapides</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Boutique</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Connexion</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> gpessem@gmail.com</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +235 68 65 57 86</li>
          </ul>
          <div className="flex space-x-3 mt-4">
            <a href="#"><Facebook className="w-5 h-5 hover:text-white" /></a>
            <a href="#"><Twitter className="w-5 h-5 hover:text-white" /></a>
            <a href="#"><Instagram className="w-5 h-5 hover:text-white" /></a>
            <a href="https://wa.me/0023568655786" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="w-5 h-5 text-green-500 hover:text-white" />
            </a>
            <a href="#"><FaTiktok className="w-5 h-5 text-pink-500 hover:text-white" /></a>
          </div>
        </div>
      </div>

      
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6 text-sm text-gray-400 gap-4">
        <p>© {new Date().getFullYear()} NaturaDivineBeauté.Tous droits réservés.</p>
        <p>Politique de confidentialité</p>
        <p>Conditions d'utilisation</p>
        <div className="flex space-x-4">
          <a href="#"><Facebook className="w-5 h-5 hover:text-white" /></a>
          <a href="#"><Twitter className="w-5 h-5 hover:text-white" /></a>
          <a href="#"><Instagram className="w-5 h-5 hover:text-white" /></a>
          <a href="https://wa.me/0023568655786" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="w-5 h-5 text-green-500 hover:text-white" />
          </a>
          <a href="#"><FaTiktok className="w-5 h-5 text-pink-500 hover:text-white" /></a>
        </div>
      </div>
    </footer>
  );
}
