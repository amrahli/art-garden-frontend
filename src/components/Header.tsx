import React, {useState, useEffect, useRef} from 'react'
import getContent from 'resources/translations'
import ModalService from './Modal-Service'


const Header: React.FC = () => {

    const translations = getContent("header","az")
    const headerElement = useRef()




    window.addEventListener("resize",(e)=>{
        if(window.innerWidth > 576){
            const header = document.getElementById('header')
            header?.classList?.remove("open")
        }
    })

    document.addEventListener("DOMContentLoaded",()=>{
        if(window.innerWidth <= 576){
            const header = document.getElementById('header')
            header?.classList?.add("open")
        }
    })

    const handleClick = () => {
        const header = document.getElementById('header')
        if(!header?.classList.contains("open")){
            header?.classList.add("open")
        }else{
            header?.classList.remove("open")
        }
    }
    return (
        <header id="header">
            <div className="row">
                <div className="col-11 col-sm-2">
                    <div className="logo">
                        <a href="/">
                            <img src="/artgarden-logo.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-1 d-sm-none">
                    <div className="hamburger" onClick={handleClick}>
                        <span>|</span>
                        <span>|</span>
                        <span>|</span>
                    </div>
                </div>
                <div className="col-12 col-sm-10">
                    <div className="header-menu">
                        <ul>
                            <li><a href="/about">{translations.menu.aboutUs}</a></li>
                            <li><a href="/services">{translations.menu.services}</a></li>
                            <li><a href="/projects">{translations.menu.projects}</a></li>
                            <li><a href="/events">{translations.menu.events}</a></li>
                            <li>
                                <a className="button button-default" href="">{translations.menu.joinUs} </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
