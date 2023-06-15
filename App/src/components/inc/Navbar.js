import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../components/images/Logo.png';

function Navba() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="Inicio">
          <img
            alt=""
            src={logo}
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Logic System
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/Inicio" className="nav-link">Inicio</Link>
          <Link to="/" className="nav-link">Usuarios</Link>
          <Link to="/contacto" className="nav-link">Contacto</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navba;

