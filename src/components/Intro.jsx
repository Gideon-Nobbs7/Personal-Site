import "../styles/Intro.css";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";

const Intro = () => {
    return (
        <Fade triggerOnce direction="up" cascade>
        <div id="intro">
            hi, <span className="name">phillip</span> here
            {/* <span className="name">phillip che</span> */}
            {/* <Typewriter 
            onInit={(typewriter) => {
                typewriter
                .changeDelay(75)
                .typeString("hi, <strong><span style='color: #E94560;'> phillip <span></strong> here")
                .start();
            }}
            /> */}
            
            <div className="description">
                <span> I code occasionally. </span>
                <div className="bio">
                    <span>full time&nbsp;</span>
                    <div className="roles">          
                        <Typewriter
                        options={{
                            strings: ['student.', 'developer.', 'reseller.'],
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