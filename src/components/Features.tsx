import {
  Star,
  ShieldCheck,
  Rocket,
  ShoppingBag,
  Smile,
  Truck
} from 'lucide-react';

const features = [
  {
    icon: <Star className="w-6 h-6 text-pink-500" />,
    title: 'Produits de qualité',
    desc: 'Nous sélectionnons les meilleures marques cosmétiques certifiées'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    title: 'Paiement sécurisé',
    desc: 'Toutes vos transactions sont protégées et cryptées'
  },
  {
    icon: <Rocket className="w-6 h-6 text-purple-500" />,
    title: 'Livraison rapide',
    desc: 'Recevez vos commandes en un temps record partout au Tchad'
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-yellow-500" />,
    title: 'Large choix',
    desc: 'Des centaines de produits pour tous les types de peau et de cheveux'
  },
  {
    icon: <Smile className="w-6 h-6 text-blue-500" />,
    title: 'Satisfaction client',
    desc: 'Un service client dédié pour vous conseiller et vous accompagner'
  },
  {
    icon: <Truck className="w-6 h-6 text-red-500" />,
    title: 'Suivi de commande',
    desc: 'Suivez l’état de vos commandes à tout moment depuis votre compte'
  }
];
export default function Features() {
  return (
    <section className="px-6 py-16 bg-white">
      <h1 className="text-3xl font-bold text-center">Nos produits et Services</h1>
      <p className="text-gray-600 text-center mt-2">Des produits naturelles et des services selon vos attentes</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-all">
            <div>{f.icon}</div>
            <h3 className="text-lg font-semibold mt-4">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
  <div>
    <p className="text-2xl font-bold text-pink-600">1 500+</p>
    <p className="text-gray-700">Commandes livrées</p>
  </div>
  <div>
    <p className="text-2xl font-bold text-pink-600">98%</p>
    <p className="text-gray-700">Clients satisfaits</p>
  </div>
  <div>
    <p className="text-2xl font-bold text-pink-600">300+</p>
    <p className="text-gray-700">Produits en stock</p>
  </div>
  <div>
    <p className="text-2xl font-bold text-pink-600">7j/7</p>
    <p className="text-gray-700">Assistance disponible</p>
  </div>
</div>

    </section>
  );
}
