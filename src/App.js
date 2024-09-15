// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Importa el Footer
import BaseDeDatos from './pages/BaseDeDatos';
import Compiladores from './pages/Compiladores';
import SistemasOperativos from './pages/SistemasOperativos';
import ArquitecturaDeComputadoras from './pages/ArquitecturaDeComputadoras';
import EticaProfesional from './pages/EticaProfesional';
import Home from './pages/Home';

const App = () => {
  return (
    <Router> 
      <Navbar />
      <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/base-de-datos" element={<BaseDeDatos />} />
        <Route path="/compiladores" element={<Compiladores />} />
        <Route path="/sistemas-operativos" element={<SistemasOperativos />} />
        <Route path="/arquitectura-de-computadoras" element={<ArquitecturaDeComputadoras />} />
        <Route path="/etica-profesional" element={<EticaProfesional />} />
      </Routes>
      
      <Footer /> {/*Desarrollado por: Deyson Donado | Carnet: 9490-21-5197*/}
      </div>
    </Router>
  );
};

export default App;
