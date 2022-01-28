import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar() {
    return (
        <div className="side-bar">
            <img src="https://avatars.githubusercontent.com/u/87393401?v=4" alt="" />
            <div className="sidebar-text">
                <p>BRYON BALL</p>
                <p>FULL-STACK WEB DEVELOPER</p>
            </div>
            <div className="contact-icons">
                <p>GET IN TOUCH</p>
                <a href="mailto:bmsmb1@gmail@gmail.com"><FontAwesomeIcon icon="envelope" /></a>
                <a href="https://www.linkedin.com/in/bryonball/"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                <a href="https://github.com/bryonbsmb1"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                <a href="https://twitter.com/bryon_b"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="assets/docs/resume.pdf" target="_blank">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>     
        </div>
    )
}

export default Sidebar;