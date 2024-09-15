import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Navbar.Brand as={Link} to="/">Proyecto</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/base-de-datos">Base de Datos</Nav.Link>
          <Nav.Link as={Link} to="/compiladores">Compiladores</Nav.Link>
          <Nav.Link as={Link} to="/sistemas-operativos">Sistemas Operativos</Nav.Link>
          <Nav.Link as={Link} to="/arquitectura-de-computadoras">Arquitectura de Computadoras</Nav.Link>
          <Nav.Link as={Link} to="/etica-profesional">Ética Profesional</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
