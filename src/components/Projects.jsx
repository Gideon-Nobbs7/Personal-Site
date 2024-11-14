import "../styles/Projects.css";
import { Fade } from "react-awesome-reveal";
import { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";
// import soleexchange from "../assets/soleexchange1.png"
// import jit from "../assets/jit.jpg"
// import spotifydash from "../assets/spotifydash.png"
import GitHubIcon from '@mui/icons-material/GitHub';
// import cypherchat from "../assets/cypherchat.png";

const Projects = () => {

    const projectList = {
        "Jiji-Products": {
            description: "A convenient and user-friendly API to search for the total quantity of products, and name, location, description, state (used or brand new), and shortened link of a product when searched.",
            tech: "Python, BeautifulSoup, FastAPI, OpenAPI",
            github: "https://github.com/giiiiid/Jiji-Products",
            // img: cypherchat
        },
        "GiiidAI": {
            description: "A real time trained model where users interact with",
            tech: "Python, Django, Pg-Vector, LLama-3, OpenAPI, PostgreSQL",
            github: "https://github.com/giiiiid/django-to-AI",
            // img: soleexchange
        },
        "Doctor-Patient Appointment System": {
            description: "An appointment system that that helps doctors and patients schedule a meeting concerning health related issues or concerns",
            tech: "Python, FastAPI, SQLAlchemy",
            github: "https://github.com/giiiiid/Appointment-System",
            // img: jit
        },
        // "Spotify Data Dashboard": {
        //     description: "Dashboard that fetches Spotify's Top 50 songs and visualizes data in text and chart form.",
        //     tech: "JavaScript, React.js, Node.js, Spotify API, Recharts API",
        //     github: "https://github.com/phillip-che/Data-Dashboard",
        //     img: spotifydash
        // }
    }

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    
    return (
        <div id="projects">
            <Fade triggerOnce duration={2000}>
                <div className="section-header">
                    <h1>/projects</h1>
                </div>
            </Fade>
            <div className="carousel-container"></div>
            <Fade direction="right">
                <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                    {Object.keys(projectList).map((key, i) => (
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={projectList[key].img}
                            alt= {i + " slide"}
                            />
                            <Carousel.Caption>
                                <h3 className="project-name">{key}</h3>
                                <div className="project-caption">
                                    <p className="project-desc">{projectList[key].description}</p>
                                    <p className="tech">{projectList[key].tech}</p>
                                    <a className="project-icon effect-shine" href={projectList[key].github} target="_blank">
                                        <GitHubIcon style={{ fontSize: 25 }}></GitHubIcon>
                                    </a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Fade>
        </div>
    )
}

export default Projects;