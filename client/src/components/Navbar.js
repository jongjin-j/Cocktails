import React from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <div className="navbarContainer">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Cocktail Search</a>
                <div className="links" id="navbarNav" >
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
