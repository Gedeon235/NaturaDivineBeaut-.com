export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-16 bg-gray-50">
      <div>
        <span className="text-sm font-semibold text-blue-600 uppercase">REVELEZ VOTRE ECLAT NATUREL</span>
        <h1 className="text-4xl font-bold leading-tight mt-4">
          Bienvenue sur notre <span className="text-blue-600">plateforme</span><br />
          de vente des Produits et de servives cosmétiques
        </h1>
        <p className="text-gray-600 mt-4">
          Explorez nos meilleurs produits et nos services qui repondent nettement à vos attentes.
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Nos produits
          </button>
          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
            Nos services
          </button>
        </div>
      </div>

      <div className="relative">
         <img src="/imge1.png" alt="imaga acceuil" className="w-full h-auto object-contain rounded-full" />
        <div className="absolute top-0 left-0 w-20 h-250 bg-blue- 250 rounded-full animate-ping"></div>
      </div>
    </section>
  );
}