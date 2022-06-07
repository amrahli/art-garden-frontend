import React from 'react'

const Header: React.FC = () => {
    return (
        <header>
            <div className="row">
                <div className="col-2">
                    <div className="logo">
                        <a href="/">
                            <img src="/artgarden-logo.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-10">
                    <div className="header-menu">
                        <ul>
                            <li><a href="/about">About us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="/events">Events</a></li>
                            <li>
                                <a className="button button-default" href="">JOIN US</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
