import React from "react";
import Logo from "../assets/castillo logo.jpg";

export const Login = () => {
  return (
    <div
      className="w-full h-full flex items-center justify-center bg-gray-50 p-4 absolute inset-0 z-0"
      style={{
        backgroundImage: `linear-gradient(rgba(216, 68, 68, 0.6), rgba(30, 30, 42, 0.95)), url('/src/assets/wallpaper.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-[400px] p-5 ">
        <div className="bg-white rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] px-10 py-5 text-center">
          <div className="logo flex justify-center items-center">
            <img
              src={Logo}
              alt="logo"
              className="h-36 w-36 object-cover mb-0 rounded-full"
            />
          </div>

          <form className="formulario mt-2" action="administrator_menu.html">
            <h2 className="text-[28px] text-gray-800 mb-6">Iniciar Sesión</h2>

            <div className="input-group mb-5 text-left">
              <label
                htmlFor="correo"
                className="block mb-0 text-gray-600 font-bold"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="tu@email.com"
                required
                className="w-full px-3 py-3 border border-gray-200 rounded-md text-base transition-colors focus:outline-none focus:border-indigo-500 focus:shadow-[0_0_5px_rgba(102,126,234,0.5)]"
              />
            </div>

            <div className="input-group mb-5 text-left">
              <label
                htmlFor="contrasena"
                className="block mb-0 text-gray-600 font-bold"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="contrasena"
                name="contrasena"
                placeholder="Contraseña"
                required
                className="w-full px-3 py-3 border border-gray-200 rounded-md text-base transition-colors focus:outline-none focus:border-indigo-500 focus:shadow-[0_0_5px_rgba(102,126,234,0.5)]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#e30713] text-white rounded-md text-base mt-2 hover:bg-black transition-colors"
            >
              Ingresar
            </button>

            <a
              href="#"
              className="block mt-5 text-indigo-500 text-sm hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};
