import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import Reservation from './Reservation'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState(null)

  // Leer el token del localStorage al cargar la página
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
      setIsLoggedIn(true);
    }
  }, []);  // Este effect se ejecuta una sola vez al iniciar el componente

  // Función para manejar login
  const handleLogin = async () => {
    const credentials = {
      username: 'andym2',  // Aquí puedes poner el valor de un formulario de login
      password: '1234%^&*' // Igualmente, lo mismo para la contraseña
    }

    try {
      // Hacemos la solicitud POST a la API para obtener el token usando Axios
      const response = await axios.post('http://localhost:8000/api/token/', credentials)

      // Si la respuesta es exitosa, obtenemos el token
      if (response.data.access) {  // Verifica que el token esté en 'access'
        setToken(response.data.access)
        setIsLoggedIn(true)

        // Guardar el token en localStorage para persistirlo entre recargas de la página
        localStorage.setItem('token', response.data.access);
      } else {
        alert('Credenciales incorrectas')
      }
    } catch (error) {
      console.error('Error al hacer login:', error)
      alert('Ocurrió un error al intentar iniciar sesión')
    }
  }

  // Función para manejar logout
  const handleLogout = () => {
    setToken(null)
    setIsLoggedIn(false)

    // Eliminar el token de localStorage al hacer logout
    localStorage.removeItem('token');
  }

  return (
    <Router>
      <div>
        <h1>Bienvenido a la aplicación</h1>
        
        {/* Botones de Registrarse y Log In/Log Out */}
        {!isLoggedIn ? (
          <>
            <button onClick={() => alert("Página de Registro")}>Registrarse</button>
            <button onClick={handleLogin}>Log In</button>
          </>
        ) : (
          <button onClick={handleLogout}>Log Out</button>
        )}

        {/* Navbar */}
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Acerca de</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/services">Servicios</Link></li>

            {/* Si el usuario está logueado, muestra el enlace a Reservas */}
            {isLoggedIn && <li><Link to="/reservations">Reservas</Link></li>}
          </ul>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<h2>Bienvenido a la página principal</h2>} />
          <Route path="/about" element={<h2>Acerca de nosotros</h2>} />
          <Route path="/contact" element={<h2>Contacto</h2>} />
          <Route path="/services" element={<h2>Servicios</h2>} />
          <Route path="/reservations" element={<Reservation />} /> {/* Nueva ruta para Reservas */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
