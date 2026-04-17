import { Container, Row, Col } from "react-bootstrap";
import { memo } from "react";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

const Footer = memo(() => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/nguyenhoanganhkiet" title="LinkedIn">
                                <img src={navIcon1} alt="LinkedIn" />
                            </a>
                            <a href="https://web.facebook.com/share/18DSvWncLX/?mibextid=wwXIfr&_rdc=1&_rdr" title="Facebook">
                                <img src={navIcon2} alt="Facebook" />
                            </a>
                        </div>
                        <div className="email-footer">
                            <a href="mailto:nguyenhoanganhkiettg2005@gmail.com">nguyenhoanganhkiettg2005@gmail.com</a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
});

Footer.displayName = 'Footer';

export { Footer };
