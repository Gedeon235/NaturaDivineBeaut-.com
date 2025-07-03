import { Home, LayoutGrid, Settings, User, Bell, LogOut } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
  const [active, setActive] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: <LayoutGrid className="w-5 h-5" /> },
    { id: 'profil', label: 'Mon profil', icon: <User className="w-5 h-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" /> },
    { id: 'parametres', label: 'Paramètres', icon: <Settings className="w-5 h-5" /> },
    { id: 'accueil', label: 'Accueil', icon: <Home className="w-5 h-5" /> },
    { id: 'logout', label: 'Déconnexion', icon: <LogOut className="w-5 h-5" /> }
  ];

  return (
    <aside className="w-64 bg-gray-100 h-screen px-4 py-6 border-r border-gray-300">
    
      <div className="mb-8 text-center">
        <img
          src="https://i.pravatar.cc/100"
          alt="avatar"
          className="mx-auto rounded-full w-16 h-16"
        />
        <h3 className="text-lg font-semibold mt-2">PESSEM GEDEON</h3>
        <p className="text-sm text-gray-500">Administrateur</p>
      </div>

      <nav className="flex flex-col space-y-2">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all
              ${active === item.id ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-200'}
            `}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

     
      <div className="mt-10 p-4 bg-blue-50 rounded-lg text-center">
        <p className="text-sm text-gray-700 mb-2">Nouveaux produits disponibles</p>
        <button className="px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
          Voir maintenant
        </button>
      </div>
    </aside>
  );
}
