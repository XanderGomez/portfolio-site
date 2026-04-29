import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="navbar-title">My Portfolio</h2>

            <div className="navbar-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;