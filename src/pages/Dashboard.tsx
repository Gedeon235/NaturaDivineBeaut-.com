// src/pages/Dashboard.tsx
import SidebarLayout from '../layouts/SidebarLayout';

export default function Dashboard() {
  return (
    <SidebarLayout>
      <h1 className="text-2xl font-bold mb-6">Bienvenue sur le tableau de bord</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 6 widgets à simuler ici */}
        <div className="bg-white p-6 rounded-lg shadow">Widget 1</div>
        <div className="bg-white p-6 rounded-lg shadow">Widget 2</div>
        <div className="bg-white p-6 rounded-lg shadow">Widget 3</div>
        <div className="bg-white p-6 rounded-lg shadow">Widget 4</div>
        <div className="bg-white p-6 rounded-lg shadow">Widget 5</div>
        <div className="bg-white p-6 rounded-lg shadow">Widget 6</div>
      </div>
    </SidebarLayout>
  );
}
