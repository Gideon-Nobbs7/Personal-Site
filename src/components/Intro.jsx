import "../styles/Intro.css";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";

const Intro = () => {
    return (
        <Fade triggerOnce direction="up" cascade>
        <div id="intro">
            hi, <span className="name">gideon</span> here            
            <div className="description">
                <span> I code occasionally. </span>
                <div className="bio">
                    <span>full time&nbsp;</span>
                    <div className="roles">          
                        <Typewriter
                        options={{
                            strings: ['scientist.', 'developer.', 'trader.'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </div>
                </div>
            </div>   
        </div>
        </Fade>
    )
}

export default Intro;