import { Container, Row, Col } from "react-bootstrap";

import logo from "../../assets/img/name.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import footerChar from '../../assets/img/footerChar.png'

import 'animate.css';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center" >
       
        <Col lg={12}>
        <div className="message-bx wow slideInUp">
          <Row className="message-bx-row">
          <Col md={6} xl={3}>
             <img className='footerIMG' src={footerChar} alt="Footer Char" />
            </Col>

            <Col lg={12} md={6} xl={5}>
              <h3>"Things are never quite as scary<br></br> when you've got the will"</h3>
            
            </Col>
          
          </Row>
        </div>

        </Col>
          <Col size={12} sm={6}>
            <img className="footerIMGD" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright {year}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer