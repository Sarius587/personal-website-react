import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.style.scss';


const Header = () => {

    const [burgerToggled, setBurgerToggled] = useState(false);

    const toggleBurger = () => {
        setBurgerToggled(!burgerToggled);
    }

    return (<header>
        <Link to="/" className="brand">Niels Pressel</Link>

        <nav>
            <ul className={`nav_links ${burgerToggled ? 'sidenav-active' : ''}`}>
                <li>
                    <Link to="/skills" onClick={() => setBurgerToggled(false)}>Skills</Link>
                </li>
                <li>
                    <Link to="/story" onClick={() => setBurgerToggled(false)}>Story</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={() => setBurgerToggled(false)}>Contact</Link>
                </li>
            </ul>
        </nav>

        <div className={`burger ${burgerToggled ? 'burgerToggle' : ''}`} onClick={toggleBurger}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </header>);
};

export default Header;