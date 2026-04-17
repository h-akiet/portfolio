import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = ({ onVisibilityChange }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  
  const toRotate = useMemo(() => ["Software Engineer", "Web Developer"], []);
  const period = 2000;
  const tickRef = useRef(null);

  const tick = useCallback(() => {
    setLoopNum(prevLoopNum => {
      const i = prevLoopNum % toRotate.length;
      const fullText = toRotate[i];
      
      setText(prevText => {
        const updatedText = isDeleting 
          ? fullText.substring(0, prevText.length - 1) 
          : fullText.substring(0, prevText.length + 1);

        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(prev => prev + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }

        return updatedText;
      });

      return prevLoopNum;
    });
  }, [isDeleting, toRotate, period]);

  useEffect(() => {
    tickRef.current = setInterval(tick, delta);

    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, [delta, tick]);

  const scrollToContact = useCallback(() => {
    document.getElementById('connect').scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Handle visibility change - Banner is hidden when image becomes visible
  useEffect(() => {
    const handleImageCheck = () => {
      const imageSection = document.querySelector('.banner-logo');
      if (imageSection && onVisibilityChange) {
        const rect = imageSection.getBoundingClientRect();
        const isImageVisible = rect.top < window.innerHeight && rect.bottom > 0;
        onVisibilityChange(!isImageVisible);
      }
    };

    window.addEventListener('scroll', handleImageCheck);
    handleImageCheck(); // Check on mount

    return () => window.removeEventListener('scroll', handleImageCheck);
  }, [onVisibilityChange]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Kiet Software Engineer`} </h1>
                  <p>Technology is the tool, Passion is the driver. As a software engineer, I am dedicated to learning and applying technical advancements to solve complex problems through innovation.</p>
                  <button onClick={scrollToContact}>Let's Connect <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="banner-logo">
            <TrackVisibility partialVisibility={false} offset={350}>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
