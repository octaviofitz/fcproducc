import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../Img/index/logo.webp'
import '../Navbar/navbar.css'

function BasicExample() {

  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar className='NavBar' bg="" expand="lg" id='home' expanded={expanded}>
    <Container>
      <Navbar.Brand><Link to='/'><img src={logo} className='logo' alt='FC producciones' /></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" id='opciones'>
          <Nav.Link as={Link} to='/nosotros' onClick={handleNavClick}>Nosotros</Nav.Link>
          <NavDropdown title="Carreras" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to='/m42' id='alerces' onClick={handleNavClick}>
              MARATÓN M42
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/desafio-pinamar' id='el-Desafio-Pinamar' onClick={handleNavClick}>
              DESAFIO PINAMAR
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/desafio-columbia' id='el-Desafio' onClick={handleNavClick}>
              DESAFÍO SIERRA DE LA VENTANA
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/colinasenaccion' id='colinas' onClick={handleNavClick}>
              COLINAS EN ACCIÓN
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/alcec' id='alecec' onClick={handleNavClick}>
              TODOS SOMOS ALCEC
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/circuito' id='circuito' onClick={handleNavClick}>
              CIRCUITO M21
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to='/galeria' onClick={handleNavClick}>Galería</Nav.Link>
          <Nav.Link as={Link} to='/contacto' onClick={handleNavClick}>Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>


  );
}

export default BasicExample;