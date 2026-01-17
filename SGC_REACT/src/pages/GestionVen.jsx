import React, { useState } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

// 🟡 DATOS DE EJEMPLO - REEMPLAZA CON LLAMADA A TU BACKEND
const vendedorasEjemplo = [
  {
    id: "07",
    nombre: "Maria",
    apellido: "Putina",
    username: "Cerosiete",
    email: "Cerosiete3267@gmail.com",
    telefono: "798237498327",
    status: "Activo",
    fechaRegistro: "02/12/2027",
    password: "Cerosiete3267",
    administradorId: "ADMIN-001"
  },
  {
    id: "07",
    nombre: "Maria",
    apellido: "Putina",
    username: "Cerosiete",
    email: "Cerosiete3267@gmail.com",
    telefono: "798237498327",
    status: "Activo",
    fechaRegistro: "02/12/2027",
    password: "Cerosiete3267",
    administradorId: "ADMIN-001"
  },
  {
    id: "07",
    nombre: "Maria",
    apellido: "Putina",
    username: "Cerosiete",
    email: "Cerosiete3267@gmail.com",
    telefono: "798237498327",
    status: "Activo",
    fechaRegistro: "02/12/2027",
    password: "Cerosiete3267",
    administradorId: "ADMIN-001"
  },
  {
    id: "07",
    nombre: "Maria",
    apellido: "Putina",
    username: "Cerosiete",
    email: "Cerosiete3267@gmail.com",
    telefono: "798237498327",
    status: "Activo",
    fechaRegistro: "02/12/2027",
    password: "Cerosiete3267",
    administradorId: "ADMIN-001"
  },
  {
    id: "07",
    nombre: "Maria",
    apellido: "Putina",
    username: "Cerosiete",
    email: "Cerosiete3267@gmail.com",
    telefono: "798237498327",
    status: "Activo",
    fechaRegistro: "02/12/2027",
    password: "Cerosiete3267",
    administradorId: "ADMIN-001"
  },
  {
    id: "07",
    nombre: "Maria",
    apellido: "Putina",
    username: "Cerosiete",
    email: "Cerosiete3267@gmail.com",
    telefono: "798237498327",
    status: "Activo",
    fechaRegistro: "02/12/2027",
    password: "Cerosiete3267",
    administradorId: "ADMIN-001"
  },
  {
    id: "07",
    nombre: "Maria",
    apellido: "Putina",
    username: "Cerosiete",
    email: "Cerosiete3267@gmail.com",
    telefono: "798237498327",
    status: "Activo",
    fechaRegistro: "02/12/2027",
    password: "Cerosiete3267",
    administradorId: "ADMIN-001"
  },
  {
    id: "07",
    nombre: "Maria",
    apellido: "Putina",
    username: "Cerosiete",
    email: "Cerosiete3267@gmail.com",
    telefono: "798237498327",
    status: "Activo",
    fechaRegistro: "02/12/2027",
    password: "Cerosiete3267",
    administradorId: "ADMIN-001"
  },
  {
    id: "07",
    nombre: "Maria",
    apellido: "Putina",
    username: "Cerosiete",
    email: "Cerosiete3267@gmail.com",
    telefono: "798237498327",
    status: "Activo",
    fechaRegistro: "02/12/2027",
    password: "Cerosiete3267",
    administradorId: "ADMIN-001"
  },
  {
    id: "07",
    nombre: "Maria",
    apellido: "Putina",
    username: "Cerosiete",
    email: "Cerosiete3267@gmail.com",
    telefono: "798237498327",
    status: "Activo",
    fechaRegistro: "02/12/2027",
    password: "Cerosiete3267",
    administradorId: "ADMIN-001"
  },
  {
    id: "07",
    nombre: "Juam",
    apellido: "Putina",
    username: "Cerosiete",
    email: "Cerosiete3267@gmail.com",
    telefono: "798237498327",
    status: "Activo",
    fechaRegistro: "02/12/2027",
    password: "Cerosiete3267",
    administradorId: "ADMIN-001"
  },
  // ... (más datos de ejemplo)
];

export function GestionVen() {
  const [vendedoras] = useState(vendedorasEjemplo); // 🔴 REEMPLAZAR: useState([]) y fetch desde backend
  const [filtro, setFiltro] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const elementosPorPagina = 6; // ✅ Máximo 6 elementos por página

  // 🔴 REEMPLAZAR: Conectar con tu endpoint de búsqueda
  const vendedorasFiltradas = vendedoras.filter((v) =>
    Object.values(v).some((val) =>
      String(val).toLowerCase().includes(filtro.toLowerCase())
    )
  );

  // Lógica de paginación
  const totalPaginas = Math.ceil(vendedorasFiltradas.length / elementosPorPagina);
  const indiceInicio = (paginaActual - 1) * elementosPorPagina;
  const indiceFin = indiceInicio + elementosPorPagina;
  const vendedorasPaginadas = vendedorasFiltradas.slice(indiceInicio, indiceFin);

  // Cambiar de página
  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-gray-900">
      {/* Fondo idéntico a VenMenu */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(216, 68, 68, 0.6), rgba(30, 30, 42, 0.95)), url('/src/assets/wallpaper.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />


      <main className="relative z-10 flex-1 px-4 py-8">
        <div className="w-full max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Gestión de Vendedoras</h1>
            <p className="text-gray-300 text-lg">Administración completa del personal</p>
          </div>

          {/* Barra de búsqueda y botón de registro */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            
            {/* Botón Registrar */}
            <button
              onClick={() => alert("Abrir formulario de registro")}
              className="bg-gradient-to-r from-white to-white text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              + Registrar Vendedora
            </button>

            {/* Búsqueda */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Buscar por ID, nombre, apellido, email, teléfono, status..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className="w-full px-4 py-3 bg-[#262729] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Tarjetas de vendedoras - MÁXIMO 6 POR PÁGINA */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendedorasPaginadas.map((vendedora) => (
              <div
                key={vendedora.id}
                className="bg-gradient-to-br from-[#3a3b3c]/90 to-[#2a2b2c]/90 rounded-xl shadow-lg p-6 border border-gray-600 hover:border-[#ec4444] transition-all duration-300"
              >
                {/* Header de la tarjeta */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white font-bold text-lg">{vendedora.nombre} {vendedora.apellido}</h3>
                    <p className="text-gray-300 text-sm">@{vendedora.username}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    vendedora.status === "Activo" 
                      ? "bg-green-500/20 text-green-300 border border-green-500/50"
                      : "bg-red-500/20 text-red-300 border border-red-500/50"
                  }`}>
                    {vendedora.status}
                  </span>
                </div>

                {/* Datos principales */}
                <div className="space-y-2 text-sm">
                  <p><span className="text-gray-400">ID:</span> <span className="text-white">{vendedora.id}</span></p>
                  <p><span className="text-gray-400">Email:</span> <span className="text-white">{vendedora.email}</span></p>
                  <p><span className="text-gray-400">Teléfono:</span> <span className="text-white">{vendedora.telefono}</span></p>
                  <p><span className="text-gray-400">Registro:</span> <span className="text-white">{vendedora.fechaRegistro}</span></p>
                </div>

                {/* Acciones */}
                <div className="flex gap-2 mt-6">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm transition-colors">
                    Editar
                  </button>
                  <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded text-sm transition-colors">
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mensaje si no hay resultados */}
          {vendedorasFiltradas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No se encontraron vendedoras con ese criterio.</p>
            </div>
          )}

          {/* ✅ PAGINACIÓN - Solo se muestra si hay más de 6 elementos */}
          {totalPaginas > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => cambiarPagina(paginaActual - 1)}
                disabled={paginaActual === 1}
                className="px-4 py-2 bg-[#3a3b3c] hover:bg-[#4a4b4c] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Anterior
              </button>

              <div className="flex gap-1">
                {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((numero) => (
                  <button
                    key={numero}
                    onClick={() => cambiarPagina(numero)}
                    className={`px-3 py-2 rounded-lg transition-colors ${
                      paginaActual === numero
                        ? "bg-red-600 text-white"
                        : "bg-[#3a3b3c] hover:bg-[#4a4b4c] text-white"
                    }`}
                  >
                    {numero}
                  </button>
                ))}
              </div>

              <button
                onClick={() => cambiarPagina(paginaActual + 1)}
                disabled={paginaActual === totalPaginas}
                className="px-4 py-2 bg-[#3a3b3c] hover:bg-[#4a4b4c] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Siguiente
              </button>
            </div>
          )}
        </div>
      </main>


    </div>
  );
}

export default GestionVen;