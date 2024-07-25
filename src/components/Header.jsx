import { Link } from 'react-router-dom';
import Nav from './NavTabs';
import '../App.css';

const Header = () => {
  return (
    <header className="header mb-4 flex-row ">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link className="text-light" to="/">
          <h1 className="m-0" style={{ color: 'white' }}>Derek Modugno</h1>
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
