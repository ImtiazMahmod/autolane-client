import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            width="200"
            className="mx-5"
            src="https://i.ibb.co/Rj4KtXV/logo-retina.png"
            alt=""
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="main-route" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="main-route" as={Link} to="/about">
              About Us{" "}
            </Nav.Link>

            <Nav.Link className="main-route" href="/experts">
              Experts{" "}
            </Nav.Link>
            <Nav.Link className="main-route" as={Link} to="/services">
              Services{" "}
            </Nav.Link>
            <Nav.Link className="main-route" as={Link} to="/addservice">
              Add Service{" "}
            </Nav.Link>
            <Nav.Link className="main-route" as={Link} to="/contact">
              {" "}
              Contact Us{" "}
            </Nav.Link>
          </Nav>
          <Nav>
            {user?.email && (
              <h5 className="text-light mt-auto mx-3">{user.displayName}</h5>
            )}
            {user?.email ? (
              <Button variant="warning" onClick={logOut}>
                LogOut
              </Button>
            ) : (
              <Nav.Link className="main-route" as={Link} to="/login">
                {" "}
                Login{" "}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

///id link not perfectly works on LinK ;
/// it works only best on anchor
