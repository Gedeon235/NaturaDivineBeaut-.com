
export default function Header() {
  return (
    <header className="bg-white shadow px-6 py-4">
     
      <div className="flex justify-center items-center space-x-4">
        <img src="/logo.png" alt="Logo du site" className="w-12 h-12 object-contain rounded-full"/>

        <div className="text-center">
  <h1 className="text-2xl font-bold text-blue-600">NaturaDivineBeauté</h1>
  <p className="text-sm text-gray-600 -mt-1">Révélez Votre Éclat Naturel</p>
</div>

        
      </div>

      <nav className="mt-9">
        <ul className="flex justify-center flex-wrap gap-6 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-500">Accueil</a></li>
          <li><a href="#" className="hover:text-blue-500">Boutique</a></li>
          <li><a href="#" className="hover:text-blue-500">Services</a></li>
          <li><a href="#" className="hover:text-blue-500">À propos</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact</a></li>
          <li><a href="#" className="hover:text-blue-500">Connexion</a></li>

            <img src="/profil.png" alt="profil" className="w-6 h-6 object-contain"/>
             <img src="/search.png" alt="recherche" className="w-6 h-6 object-contain"/>
              <img src="/panier.png" alt="utilisateur" className="w-6 h-6 object-contain"/>
        </ul>
      </nav>
    </header>
  );
}
