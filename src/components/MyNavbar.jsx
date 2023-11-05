import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom/";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-secondary-subtle">
      <Container>
        <Navbar.Brand href="#home">WeatherNow</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="d-flex gap-2 align-items-center">
              <Link className="text-decoration-none text-black" to="/">
                Home
              </Link>
              <Link className="text-decoration-none text-black" to="/profile">
                Profile
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
