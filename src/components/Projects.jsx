import { Container, Row, Col } from "react-bootstrap";
import { useMemo } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardMobile } from "./ProjectCardMobile";
import { ProjectCardTest } from "./ProjectCardTest";
import projImg1 from "../assets/img/ecommerce.png";
import projImg2 from "../assets/img/desktop_app.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Extract projects data outside component to avoid recreation on every render
const PROJECTS_DATA = [
    {
        id: 'ecommerce',
        title: "Cosmetics E-Commerce Platform",
        description: `Multi-vendor, supporting product, order, and vendor management with payment integration.`,
        tech: ["Spring Boot", "Java", "SQL Server", "JPA", "MVC"],
        imgUrl: projImg1,
        githubUrl: "https://github.com/h-akiet/OneShop-Website.git",
    },
     {
        id: 'web-api',
        title: "Web API",
        description: `A SOLID-based Web API for sales management featuring RESTful endpoints, EF Core integration for high-performance data handling, and Swagger UI for automated documentation and testing.`,
        tech: [".Net", "C#", "SQL Server", "EF Core", "Solid"],
        imgUrl: projImg3,
        githubUrl: "https://github.com/h-akiet/E-Shop.git",
    },
    {
        id: 'desktop-app',
        title: "Desktop App",
        description: `Implemented store operations including sales management, promotions, inventory tracking, and employee management...`,
        tech: ["Winform", "C#", "SQL Server"],
        imgUrl: projImg2,
        githubUrl: "https://github.com/h-akiet/OneShop-Website.git",
    },
    {
        id: 'puzzle-ai',
        title: "8-Puzzle AI Solver",
        description: `This educational project implements AI search strategies—from Uninformed (BFS, DFS) to Metaheuristics (Genetic, SA)—to solve the 8-puzzle. It serves as a benchmarking platform to evaluate and compare each algorithm's performance in terms of optimality, time complexity, and memory efficiency.`,
        tech: ["Python", "Pygame"],
        imgUrl: projImg2,
        githubUrl: "https://github.com/h-akiet/8-Puzzle_AI_Solver.git",
    },
];

export const Project = () => {
    // Memoize projects data to prevent recreation
    const projects = useMemo(() => PROJECTS_DATA, []);

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
                                                projects.map((project) => {
                                                    return (
                                                        <ProjectCardTest
                                                            key={project.id}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                        <Row className="proj-mobile">
                                            {projects.map((project) => (
                                                <ProjectCardMobile key={project.id} {...project} />
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