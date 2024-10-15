import React from 'react'
import './navbar.css'
import { Nav, Navbar } from 'react-bootstrap';
export default function TopNav() {
  return (
    <div>

      <Navbar bg='#0a1f44' variant="dark" expand="lg" className="mb-4">
        &nbsp;&nbsp;&nbsp;  <img src="./assets/icon.png" alt="Logo" height={'30px'} width={'50px'} />

        <Navbar.Brand href="#" className="ms-3">NBC NEWS</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-3">
            <Nav.Link href="/" className="text-white"><b>HOME</b></Nav.Link>
            <Nav.Link href="/world" className="text-white"><b>WORLD</b></Nav.Link>
            <Nav.Link href="/politics" className="text-white"><b>POLITICS</b></Nav.Link>
            <Nav.Link href="technology" className="text-white"><b>TECHNOLOGY</b></Nav.Link>
            <Nav.Link href="sports" className="text-white"><b>SPORTS</b></Nav.Link>
            <Nav.Link href="business" className="text-white"><b>BUSINESS</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
