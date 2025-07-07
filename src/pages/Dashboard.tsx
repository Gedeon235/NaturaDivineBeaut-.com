import { Link } from 'react-router-dom';
import SidebarLayout from '../layouts/SidebarLayout';

export default function Dashboard() {
  const activities = [
    { id: 1, title: 'Nouvelle commande reçue', time: 'il y a 2h' },
    { id: 2, title: 'Utilisateur inscrit', time: 'il y a 5h' },
    { id: 3, title: 'Message reçu', time: 'il y a 8h' },
    { id: 4, title: 'Commande expédiée', time: 'il y a 1j' }
  ];

  return (
    <SidebarLayout>
      <h1 className="text-2xl font-bold mb-6">Bienvenue sur le tableau de bord</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        <div className="bg-white p-6 rounded-lg shadow col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-pink-100 p-4 rounded shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Produits</h3>
            <p className="text-gray-600">300 en stock</p>
          </div>
          <div className="bg-blue-100 p-4 rounded shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Commandes</h3>
            <p className="text-gray-600">1 200 livrées</p>
          </div>
          <div className="bg-green-100 p-4 rounded shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Utilisateurs</h3>
            <p className="text-gray-600">450 membres</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Avis Clients</h3>
            <p className="text-gray-600">98% satisfaits</p>
          </div>
          <div className="bg-purple-100 p-4 rounded shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Visites</h3>
            <p className="text-gray-600">5 000 ce mois</p>
          </div>
          <div className="bg-red-100 p-4 rounded shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Messages</h3>
            <p className="text-gray-600">32 non lus</p>
          </div>
        </div>

       
        <div className="bg-white p-6 rounded-lg shadow col-span-1">
          <h2 className="text-lg font-semibold mb-4">Activité récente</h2>
          <ul className="space-y-4">
            {activities.map(activity => (
              <li key={activity.id}>
                <Link
                  to={`/dashboard/activity/${activity.id}`}
                  className="flex items-start space-x-3 group hover:bg-gray-50 p-2 rounded transition"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-1" />
                  <div>
                    <p className="text-sm text-gray-900 group-hover:text-blue-600 font-medium">{activity.title}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SidebarLayout>
  );
}
