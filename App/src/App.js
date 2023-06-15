import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Usuarios from './components/pages/Usuario';
import Contacto from './components/pages/Contacto';
import Navbar from './components/inc/Navbar';
import Inicio from './components/pages/Inicio';
import Footer from './components/inc/Footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Usuarios />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
