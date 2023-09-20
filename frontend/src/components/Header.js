import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header () {

    const [showSideNav, setShowSideNav] = useState(false)

    function toggle () {
        setShowSideNav(!showSideNav)
    }

    return (
        <>
        <header>
            <div className="brand-name">
                <Link to="/" className='home'>Tourify</Link>
            </div>
            <div className="brank-links">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink style={{pointerEvents: 'none'}} to="/explore">Explore</NavLink>
                    </li>
                </ul>
                <span onClick={toggle} className="menu-bar">&#8801;</span>
            </div>
        </header>

        {
            showSideNav &&
            <nav className="nav">
            <span onClick={toggle} className="close">&#10006;</span>
            <ul>
                <a href="index.html">Contact</a>
                <a href="#features">About</a>
                <a className="hover" href="#pricing">Resume</a>
                <a href="#faq">Projects</a>
                <a href="#reviews">Blog</a>
            </ul>
        </nav>}
        </>
    )
}