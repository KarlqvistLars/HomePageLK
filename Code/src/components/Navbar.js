import React, { useState } from 'react'
import logo from "../assets/logo.png";
import open_menu from "../assets/open_menu.png"
import close_menu from "../assets/close_menu.png"
// import linkedinlogo from "../assets/In-Blue-Logo.png"
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <MenuItems />
            <ul className={menuOpen ? "open" : ""}>
                <p className='menu'
                    onClick={() => { setMenuOpen(!menuOpen) }}>
                    <img src={close_menu} className='menu_img' alt='Close'/>
                </p>
                < div className='menu' onClick={() => { setMenuOpen(!menuOpen) }}>
                    <MenuItems />
                </div>
            </ul>

            <ul className={menuOpen ? "" : "open"}>
                <p className='menu'
                    onClick={() => { setMenuOpen(!menuOpen) }}>
                    <img src={open_menu} className='menu_img' alt='Open'/>
                </p>
            </ul>

            <Link to='/' className='links-logo' onClick={() => { setMenuOpen(false) }}>
                <img src={logo} alt="Logo" />
            </Link>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const test = resolvedPath.pathname
    const testEng = resolvedPath.pathname + "-eng"
    const isActive = useMatch({ path: test, end: true })
    const isActiveEng = useMatch({ path: testEng, end: true })

    console.log({ path: resolvedPath.pathname });

    return (
        <li className={(isActive || isActiveEng) ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </ li>
    )
}

function MenuItems() {
    const linkedin = "https://www.linkedin.com/in/lars-karlqvist-582b7a28/";
    return (
        <ul >
            <li>
                <CustomLink to='/history'>History</CustomLink>
            </li>
            <li>
                <CustomLink to='/mystory'>My Story</CustomLink>
            </li>
            <li>
                <CustomLink to='/about'>About</CustomLink>
            </li>
            <li>
                <CustomLink to='/services'>Services</CustomLink>
            </li>
            <li>
                <a href={linkedin} target="_blank" rel="noreferrer">Linkedin</a>
            </li>
        </ul>
    )
}