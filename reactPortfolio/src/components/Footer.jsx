import { Link } from 'react-router-dom';
import { GitLink} from '../assets/images/github.png';

const Footer = () => {
    return(
        <div>
             <a href="https://nameless-wave-14504-8d3cae4aaa8e.herokuapp.com/">
                <img src={GitLink} id="git-picture" className="align-center"/>
            </a>
        </div>
       
    );
}