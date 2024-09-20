import { Link, NavLink } from 'react-router-dom'
import './index.scss'
//import LogoS from '../../assets/images/logo-s.png'
//import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


//gonna have to change some stuff here to fit me


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            
            AR
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
                <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/adrian-rojas-b0a38a223/">
                    <FontAwesomeIcon icon={faLinkedinIn} color="4d4d4e" />
                </a>
            </li>

            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/AdrianR13a/Self-Projects.git">
                    <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar