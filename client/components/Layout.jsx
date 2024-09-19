import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.png';

export default function Layout() {
    return (
        <>
            <div className="navbar">
                <img className='my-logo' src={logo} alt="Logo" />
                <nav>
                    <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/services">Services</Link> | <Link to="/project">Project</Link> | <Link to="/contact">Contact </Link>
                </nav>
            </div>
            <hr />

        </>

    );
}
