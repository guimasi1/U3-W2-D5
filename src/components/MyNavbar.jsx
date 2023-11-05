import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom/";

const MyNavbar = () => {
  const [username, setUsername] = useState(() => {
    const saved = localStorage.getItem("username");
    return saved || "Save your username";
  });

  return (
    <Navbar expand="lg" className="bg-blue-dark sticky-top ">
      <Container>
        <Navbar.Brand className="text-white" href="#home">
          WeatherNow
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="d-flex gap-2 align-items-center">
              <Link className="text-decoration-none text-white" to="/">
                Home
              </Link>
              <Link className="text-decoration-none text-white" to="/profile">
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
