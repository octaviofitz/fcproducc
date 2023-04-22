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
  <NavDropdown.Item href="#action/3.1" id='alerces' onClick={() => setExpanded(false)}>
    <Link to='/m42'>M42 LOS ALERCES</Link>
  </NavDropdown.Item>
  <NavDropdown.Item href="#action/3.2" id='el-Desafio' onClick={() => setExpanded(false)}>
    <Link to='desafio-columbia'>EL DESAFÍO COLUMBIA</Link>
  </NavDropdown.Item>
  <NavDropdown.Item href="#action/3.3" id='alecec' onClick={() => setExpanded(false)}>
    <Link to='alcec'>TODOS SOMOS ALCEC</Link>
  </NavDropdown.Item>
  <NavDropdown.Item href="#action/3.4" id='circuito' onClick={() => setExpanded(false)}>
    <Link to='/circuito'>CIRCUITO M21</Link>
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