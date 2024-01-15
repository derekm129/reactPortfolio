// import { Link } from 'react-router-dom';
import GitLink from '../assets/images/github.png';

const Footer = () => {
    return(
        <div>
             <a href="https://github.com/derekm129">
                <img src={GitLink} id="git-picture" className="position-absolute bottom-0 start-50"/>
            </a>
        </div>
       
    );
}

export default Footer;