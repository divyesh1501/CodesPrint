import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <nav>
            <Link to="/">Logo</Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <Link to="/login"><button>Login</button></Link> 
            </ul>
        </nav>
    )
}
