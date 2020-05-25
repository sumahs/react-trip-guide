import React from 'react';
import logo from '../../logo.svg';
import './navbar.scss';

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="place"></img>
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link">
                        About
                    </a>
                </li>
                <li className="active">
                    <a href="/" className="nav-link">
                        Trips
                    </a>
                </li>
            </ul>
        </nav>
    );
}