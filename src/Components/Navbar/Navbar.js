import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../Img/index/logo.png'
import '../Navbar/navbar.css'

function BasicExample() {
  return (
    <Navbar className='NavBar' bg="" expand="lg" id='home'>
      <Container>
        <Navbar.Brand><Link to='/'><img src={logo} className='logo' alt='FC producciones' /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/nosotros'>Nosotros</Link></Nav.Link>
            <Nav.Link><Link to='/carreras'>Nuestras carreras</Link></Nav.Link>
            <Nav.Link><Link to='/galeria'>Galería</Link></Nav.Link>
            <Nav.Link><Link to='/contacto'>Contacto</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;