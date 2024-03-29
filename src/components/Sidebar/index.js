import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='logo subtilte' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' className='home-link' to='/'>
                <FontAwesomeIcon icon={faHome} color={'gray'} />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color={'gray'} />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color={'gray'} />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://linkedin.com/in/zach-egner' >
                    <FontAwesomeIcon icon={faLinkedin} color={'gray'} />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/zachegner' >
                    <FontAwesomeIcon icon={faGithub} color={'gray'} />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;
