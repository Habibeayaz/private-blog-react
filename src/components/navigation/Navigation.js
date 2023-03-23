import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <ul>
                    <li><NavLink to="/" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Home</NavLink></li>
                    <li><NavLink to="/Login" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Login</NavLink></li>
                    <li><NavLink to="/Blogposts" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Blogposts</NavLink></li>
                   </ul>
            </div>
        </nav>
    );
}

export default Navigation;