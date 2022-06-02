/*
@author: Arun George, 2022
FILE INFO
This component contains navigation settings
*/

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const URL_LinkedIn = "https://www.linkedin.com/in/linkarungeorge/";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">NuraNet</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Contact" id="basic-nav-dropdown">
                <NavDropdown.Item href={URL_LinkedIn} target="_new">
                  LinkedIn
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
