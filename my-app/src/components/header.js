import { Link } from "react-router-dom";
import { Navbar, Nav, Container, } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Bryon Ball</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/" as={Link} >About Me</Nav.Link>
          <Nav.Link to="/portfolio" as={Link}>Portfolio</Nav.Link>
          <Nav.Link to="/contact" as={Link}>Contact</Nav.Link>
          <Nav.Link to="/resume" as={Link}>Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;