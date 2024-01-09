import { Link } from 'react-router-dom';
import Nav from './NavTabs';

const Header = () => {
    return (
      <header className="g-primary text-light mb-4 py-3 flex-row align-center">
        {/* </Nav> */}
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <Link className="text-light" to="/">
            <h1 className="m-0">Derek Modugno</h1>
          </Link>
        </div>
        <Nav />
      </header>
    );
  };
  
  export default Header;
  