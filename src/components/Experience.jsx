import "../styles/Experience.css";
import JobList from "./JobList";
import { Fade } from "react-awesome-reveal";

const Experience = () => {

    const tech_stack = [
        "Python",
        "Django",
        "Django Rest Framework",
        "Flask",
        "FastAPI",
        "HTML/CSS",
        "Javascript",
        "Figma",
        "MongoDB",
        "PostgreSQL",
        "SQLAlchemy",
        "Grafana-k6",
        "Docker",
    ];

    return (
            <div className="experience-container">
                <Fade triggerOnce duration={2000}>
                    <div className="section-header">
                        <h1>/experience</h1>
                    </div>
                </Fade>
                <div className="skills-container">
                    <ul className="tech-stack">
                        {tech_stack.map((item, i) => (
                            <Fade 
                            key={i}
                            triggerOnce
                            direction='up' 
                            delay={`${i*5}`} 
                            >
                                <li key={item}>{item}</li>
                            </Fade>
                        ))}
                    </ul>
                </div>
                <JobList />
            </div>
    )
}

export default Experience;