import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  return (
    <div>
      <Container fluid className="footer-bottom" style={{ backgroundColor: '#0a1f44', color: '#ffffff' }}>
        <br></br>
        <Container>
          <Row className="pt-3 pb-3 justify-content-between align-items-center">
            <Col md={3} className="d-flex align-items-center">
              <img
                src="./assets/icon.png"
                alt="Logo"
                style={{ width: '50px', marginRight: '15px' }}
              />
              <h6><b>NBC NEWS</b></h6>
            </Col>
            <Col md={2}>
              <h6>About</h6>
              <ul className="list-unstyled">
                <li style={{ marginBottom: '10px' }}>Contact</li>
                <li style={{ marginBottom: '10px' }}>Help</li>
                <li style={{ marginBottom: '10px' }}>Careers</li>
                <li style={{ marginBottom: '10px' }}>Add choices</li>
              </ul>
            </Col>
            <Col md={2}>
              <h6>Privacy Policy</h6>
              <ul className="list-unstyled">
                <li style={{ marginBottom: '10px' }}>Cookie Notice</li>
                <li style={{ marginBottom: '10px' }}>CA Notice</li>
                <li style={{ marginBottom: '10px' }}>Terms of Service</li>
                <li style={{ marginBottom: '10px' }}>NBC News sitemap</li>
              </ul>
            </Col>
            <Col md={2}>
              <h6>Useful Links</h6>
              <ul className="list-unstyled">
                <li style={{ marginBottom: '10px' }}>Closed Captioning</li>
                <li style={{ marginBottom: '10px' }}>Advertise</li>
                <li style={{ marginBottom: '10px' }}>Select Shopping</li>
                <li style={{ marginBottom: '10px' }}>Select Personal Finance</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      <br></br>
    </div>
  );
}
