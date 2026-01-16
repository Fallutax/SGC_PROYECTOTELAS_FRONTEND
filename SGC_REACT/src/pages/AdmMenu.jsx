import React from "react";
import { Navbar } from "../components/navbar";
import { Button } from "../components/Button";
import { Footer } from "../components/footer";
import People from "../assets/person-check-fill.svg";

export function AdmMenu() {
  return (
    <div class="bg-[#262729]">
      <Navbar />

      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-white mb-2">
          Panel de Administración
        </h1>
        <p className="text-gray-300 text-lg">
          Gestión integral del sistema de telas
        </p>
      </div>

      <div class="w-full h-full flex justify-center items-center min-h-screen">
        <section
          id="funcionalidades"
          class=" flex flex-col gap-y-8 w-screen p-4  "
        >
          <Button
            title="Gestion de Vendedoras"
            description="Control de Vendedoras"
          />
          <Button title="Gestion de Telas" description="Control de las Telas" />
          <Button
            title="Gestion de Retazos"
            description="Control de los Retazos"
          />
          <Button
            title="Dashboard Estadistico"
            description="Graficos de Interes"
            imagen={<People className="h-8 w-8 text-indigo-600" />}
          />
        </section>
      </div>
      <Footer />
    </div>
  );
}
