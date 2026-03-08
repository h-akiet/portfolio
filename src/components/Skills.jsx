import { Container, Row, Col } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import csharp from '../assets/img/csharp.svg';
import cpp from '../assets/img/c-plusplus.svg';
import js from '../assets/img/javascript.svg';
import html from '../assets/img/html5.svg';
import css from '../assets/img/css.svg';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {SkillGroup} from "./SkillGroup";




export const Skills = () => {
    const languages = [
        { name: "C#", level: "90%" },
        { name: "C++", level: "90%" },
        { name: "JavaScript", level: "70%" },
        { name: "HTML/CSS", level: "80%" },
    ];

    const database = [
        { name: "SQL Server", level: "90%" },
    ];


    const other = [
        { name: "Spring Boot", level: "80%" },
        { name: ".Net", level: "85%" },
        { name: "Git/Github", level: "90%" },
    ];

    return (
        <section className="skill" id="skills">
            <Container>
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2 className="title">Skills</h2>
                            <p>Mastering frontend basics and engineering principles for clean, scalable code</p>
                            <div className="skills-grid-container">

                                <SkillGroup title="Languages" skills={languages} />
                                <SkillGroup title="Databases" skills={database} />
                                <SkillGroup title="Other" skills={other} />


                            </div>
                            {/* <div className="test-img">
                                <img src={test} alt="" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}