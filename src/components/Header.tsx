import React from 'react'
import getContent from 'resources/translations'

const translations = getContent("header","az")

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
                            <li><a href="/about">{translations.menu.aboutUs}</a></li>
                            <li><a href="/services">{translations.menu.services}</a></li>
                            <li><a href="/projects">{translations.menu.projects}</a></li>
                            <li><a href="/events">{translations.menu.events}</a></li>
                            <li>
                                <a className="button button-default" href="">{translations.menu.joinUs}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
