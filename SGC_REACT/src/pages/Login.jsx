// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
// import { authService } from '../services/authService';

// const LoginPage = () => {
//   const [credentials, setCredentials] = useState({ username: '', password: '' });
//   const [error, setError] = useState(null);
//   const { login: contextLogin } = useAuth(); // Función del AuthContext
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       const data = await authService.login(credentials.username, credentials.password);

//       // 1. Guardar en el contexto global
//       contextLogin(data);

//       // 2. Redirigir según el rol que devuelva Django
//       if (data.user.role === 'admin') {
//         navigate('/admin');
//       } else {
//         navigate('/seller');
//       }
//     } catch (err) {
//       setError("Credenciales inválidas o error de servidor");
//     }
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit}>
//         <h2>Iniciar Sesión</h2>
//         {error && <p style={{ color: 'red' }}>{error}</p>}

//         <input name="username" placeholder="Usuario" onChange={handleChange} />
//         <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} />

//         <button type="submit">Entrar</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
