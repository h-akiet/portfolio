import { Container, Row, Nav, Tab, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardMobile } from "./ProjectCardMobile";
import projImg1 from "../assets/img/ecommerce.png";
import projImg2 from "../assets/img/desktop_app.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Project = () => {

    const projects = [
        {
            title: "Cosmetics E-Commerce Platform",
            description: `Multi-vendor, supporting product, order, and vendor management with payment integration.`,
            tech: ["Spring Boot", "Java", "SQL Server", "JPA", "MVC"],
            imgUrl: projImg1,
            githubUrl: "https://github.com/h-akiet/OneShop-Website.git",
        },
         {
            title: "Web API",
            description: `A SOLID-based Web API for sales management featuring RESTful endpoints, EF Core integration for high-performance data handling, and Swagger UI for automated documentation and testing.`,
            tech: [".Net", "C#", "SQL Server", "EF Core", "Solid"],
            imgUrl: projImg3,
            githubUrl: "https://github.com/h-akiet/E-Shop.git",
        },
        {
            title: "Desktop App",
            description: `Implemented store operations including sales management, promotions, inventory tracking, and employee management...`,
            tech: ["Winform", "C#", "SQL Server"],
            imgUrl: projImg2,
            githubUrl: "https://github.com/h-akiet/OneShop-Website.git",
        },
        
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={`${isVisible ? "animate__animated animate__fadeIn" : ""} project-bx`}>
                                    <h2 className="title">
                                        Projects
                                    </h2>
                                    <p>The following projects were developed during my academic studies, where I worked primarily as a Backend Developer.
                                        I focused on system architecture, database design, authentication, and API development.</p>
                                    <div id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Row className="proj-normal">
                                            {
                                                projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                        <Row className="proj-mobile">
                                            {projects.map((project, index) => (
                                                <ProjectCardMobile key={index} {...project} />
                                            ))}
                                        </Row>
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}