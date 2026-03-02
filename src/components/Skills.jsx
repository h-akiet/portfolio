import { Container, Row, Col } from "react-bootstrap";
import meter95 from '../assets/img/95.svg';
import meter80 from '../assets/img/80.svg';
import meter90 from '../assets/img/90.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from '../assets/img/arrow1.svg';
import arrow2 from '../assets/img/arrow2.svg';
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2 className="title">Skills</h2>
                            <p>A third-year Software Engineering student at HCMC University of Technology and Engineering<br></br>GPA: 3.38/4.0</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter80} alt="Image" />
                                    <h5>HTML/CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter90} alt="Image" />
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <img src={meter90} alt="Image" />
                                    <h5>SQL Server</h5>
                                </div>
                                <div className="item">
                                    <img src={meter80} alt="Image" />
                                    <h5>Git/GitHub</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}