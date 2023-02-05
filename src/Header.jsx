import React from "react";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Calculator</Navbar.Brand>
        <Nav
          className="justify-content-end"
          activeKey="https://www.linkedin.com/in/madhurkharche22/"
        >
          <Nav.Item>
            <Nav.Link href="https://www.linkedin.com/in/madhurkharche22/">
              LinkedIn
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
