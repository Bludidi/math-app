import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header className="top-section">
    <h2 className="nav-header">Math Magicians</h2>
    <nav className="navigation">
      <NavLink to="/" className="link">HOME</NavLink>
      <NavLink className="link" to="/calculator">CALCULATOR</NavLink>
      <NavLink className="link" to="/quotes">QUOTES</NavLink>
    </nav>
  </header>
);

export default Header;
