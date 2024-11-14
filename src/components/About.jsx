import "../styles/About.css";
import { Fade } from "react-awesome-reveal";
// import me from "../assets/joshuatree.jpg"

const About = () => {
    return (
            <div id="about">
                <Fade triggerOnce duration={2000}>
                    <div className="section-header">
                        <h1>/about</h1>
                    </div>
                    </Fade>
                    <Fade direction="right">
                    <div className="about-container">
                        <div className="about-text">
                            <Fade direction="up" delay={300}>
                                <p>
                                    I recently graduated in <span className="highlight">Environmental Science</span> from <a className="effect-shine" href="https://www.knust.edu.gh" target="_blank" rel="noreferrer">KNUST</a> and will be joining <a className="effect-shine" href="https://www.epa.gov.gh" target="_blank" rel="noreferrer">Environmental Protection Agency</a> in Kumasi as a <span className="highlight">National Service Personnel</span> this fall.
                                </p>
                                <p>
                                    Apart from the programme I studied in school, I am self taught backend developer where I work with a team of 5,
                                    transitioning the workflow of EPA from paperwork to digitalization. My other hobbies and interests include economics, personal finance, ministry, and video games!
                                </p>
                            </Fade>
                        </div>
                        {/* <img className="about-image" src={me}></img> */}
                    </div>
                </Fade>
            </div>
    )
}

export default About;