import "../styles/NavBar.css";
import { Fade } from "react-awesome-reveal";
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const NavBar = ({setOnHomeClick, setOnAboutClick, setOnProjectsClick, setSection}) => {
    return (
        <Fade triggerOnce direction="left">
        <div id="navbar">
            <ul>
                <li className="navbar-item">
                    <a href="#home" className="effect-underline"
                    onClick={() => {
                        // setOnHomeClick(true)
                        // setOnAboutClick(false)
                        // setOnProjectsClick(false)
                        setSection(0);
                    }}
                    >/home</a>
                </li>
                <li className="navbar-item">
                    <a href="#about" className="effect-underline"
                    onClick={() => {
                        // setOnHomeClick(false)
                        // setOnAboutClick(true)
                        // setOnProjectsClick(false)
                        setSection(1);
                    }}
                    >/about</a>
                </li>
                <li className="navbar-item">
                    <a href="#experience" className="effect-underline"
                    onClick={() => {
                        // setOnHomeClick(false)
                        // setOnAboutClick(true)
                        // setOnProjectsClick(false)
                        setSection(2);
                    }}
                    >/experience</a>
                </li>
                <li className="navbar-item">
                    <a href="#projects" className="effect-underline"
                    onClick={() => {
                        // setOnHomeClick(false)
                        // setOnAboutClick(false)
                        // setOnProjectsClick(true)
                        setSection(3);
                    }}
                    >/projects</a>
                </li>
                <li>
                    <div className="socials">
                        <a className="social-icon" href="mailto:phillipche1@gmail.com" target="_blank">
                            <MailOutlineRoundedIcon style={{ fontSize: 25 }}></MailOutlineRoundedIcon>
                        </a>
                        <a className="social-icon" href="https://github.com/phillip-che" target="_blank">
                            <GitHubIcon style={{ fontSize: 25 }}></GitHubIcon>
                        </a>
                        <a className="social-icon" href="https://www.linkedin.com/in/phillipche" target="_blank">
                            <LinkedInIcon style={{ fontSize: 25 }}></LinkedInIcon>
                        </a>
                        <a className="social-icon" href="https://www.instagram.com/philllip.che" target="_blank">
                            <InstagramIcon style={{ fontSize: 25 }}></InstagramIcon>
                        </a>
                    </div>
                </li>
            </ul>
        </ div>
        </Fade>
    )
}

export default NavBar;