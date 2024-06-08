// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Pizza Shop</h1>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                
            </div>
        </nav>
    );
};

export default Navbar;