import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./cartwidget"

export const NavBar = () => {
    return <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Groove Vinyl</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Shop</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
            <Nav.Link href="#pricing">Info</Nav.Link>
          </Nav>
          
    <CartWidget/>
        </Container>
      </Navbar>

    </>
};