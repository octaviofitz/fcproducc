import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/nosotros' onClick={handleNavClick}>Nosotros</Nav.Link>
          <Nav.Link as={Link} to='/carreras' onClick={handleNavClick}>Nuestras carreras</Nav.Link>
          <Nav.Link as={Link} to='/galeria' onClick={handleNavClick}>Galería</Nav.Link>
          <Nav.Link as={Link} to='/contacto' onClick={handleNavClick}>Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
}

export default BasicExample;