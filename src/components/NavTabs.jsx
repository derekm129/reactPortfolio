import { Link, useLocation } from 'react-router-dom';
import '../App.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav-tabs d-flex m-4">
      <li className="nav-item">
        <h2>
          <Link
            to="/"
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            About
          </Link>
        </h2>
      </li>
      <li className="nav-item">
        <h2>
          <Link
            to="/Portfolio"
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </h2>
      </li>
      <li className="nav-item">
        <h2>
          <Link
            to="/Contact"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </h2>
      </li>
      <li className="nav-item">
        <h2>
          <Link
            to="/Resume"
            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
        </h2>
      </li>
    </ul>
  );
}

export default NavTabs;
