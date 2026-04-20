import { useState, useEffect, useRef, useCallback } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { HashLink } from 'react-router-hash-link';
import { useScrollDetection, useDebounce } from '../hooks';
import { memo } from "react";

const NavBarComponent = () => {

  const [activeLink, setActiveLink] = useState('home');
  const scrolled = useScrollDetection(50);
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  // Debounced function for detecting active section on scroll
  const detectActiveSection = useCallback(useDebounce(() => {
    const sections = ["home", "skills", "projects"];
    let current = "";

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Kiểm tra xem phần tử có đang chiếm phần lớn khu vực viewport (khoảng 150px từ top)
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section;
          break; // Tìm thấy rồi thì dừng vòng lặp ngay
        }
      }
    }
    
    // Nếu tìm thấy section mới và nó khác với activeLink hiện tại
    if (current && current !== activeLink) {
      setActiveLink(current);
    }
  }, 100), [activeLink]); // activeLink ở đây giúp debounce nhận giá trị mới nhất

  // Detect active section on scroll
  useEffect(() => {
    window.addEventListener("scroll", detectActiveSection, { passive: true });
    return () => {
      window.removeEventListener("scroll", detectActiveSection);
    };
  }, [detectActiveSection]);

  const handleNavClick = useCallback((section) => {
    setActiveLink(section);
  }, [activeLink]);

  return (
      <Navbar 
      collapseOnSelect
      ref={navRef} 
      expanded={expanded} 
      onToggle={() => setExpanded(!expanded)} 
      expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" onClick={() => handleNavClick('home')} active={activeLink === 'home'} className={activeLink === 'home' ? 'navbar-link active' : 'navbar-link'}>Home</Nav.Link>
              <Nav.Link href="#skills" onClick={() => handleNavClick('skills')} active={activeLink === 'skills'} className={activeLink === 'skills' ? 'navbar-link active' : 'navbar-link'}>Skills</Nav.Link>
              <Nav.Link href="#projects" onClick={() => handleNavClick('projects')} active={activeLink === 'projects'} className={activeLink === 'projects' ? 'navbar-link active' : 'navbar-link'}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/nguyenhoanganhkiet"><img src={navIcon1} alt="" /></a>
                <a href="https://web.facebook.com/share/18DSvWncLX/?mibextid=wwXIfr&_rdc=1&_rdr"><img src={navIcon2} alt="" /></a>
              
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export const NavBar = memo(NavBarComponent);
NavBar.displayName = 'NavBar';
