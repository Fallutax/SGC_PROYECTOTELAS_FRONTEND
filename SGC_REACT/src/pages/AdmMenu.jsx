// AdmMenu.jsx - Actualizado con mejoras visuales
import React from "react";
import { Navbar } from "../components/Navbar";
import { Btns } from "../components/Btns";
import { Footer } from "../components/Footer";

export function AdmMenu() {
  return (
    <div className="bg-[#262729] min-h-screen flex flex-col">
      <Navbar />
      
      {/* Contenedor principal con mejor estilo */}
      <main className="flex-1 flex justify-center items-center px-4 py-8">
        <section
          id="funcionalidades"
          className="flex flex-col gap-y-6 w-full max-w-4xl"
        >
          {/* Título mejorado */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Panel de Administración
            </h1>
            <p className="text-gray-300 text-lg">
              Gestión integral del sistema de telas
            </p>
          </div>

          {/* Grid responsive para los botones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Btns
              title="Gestión de Vendedoras"
              description="Control de Vendedoras"
              icon="👥"
              className="hover:scale-105 transition-transform duration-300"
            />
            <Btns 
              title="Gestión de Telas" 
              description="Control de las Telas" 
              icon="🧵"
              className="hover:scale-105 transition-transform duration-300"
            />
            <Btns
              title="Gestión de Retazos"
              description="Control de los Retazos"
              icon="🧩"
              className="hover:scale-105 transition-transform duration-300"
            />
            <Btns
              title="Dashboard Estadístico"
              description="Gráficos de Interés"
              icon="📊"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </section>
      </main>

      {/* Footer siempre al final */}
      <Footer />
    </div>
  );
}

export default AdmMenu;