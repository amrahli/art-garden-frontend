import React, {useState,useRef, useEffect} from 'react'
import getContent from 'resources/translations'
import ModalService from './Modal-Service'

const translations = getContent("header","az")

const Header: React.FC = () => {
    const test = (e:any) =>{
        e.preventDefault();
        setVisible("show")
    }
    const header = document.getElementById('header')
    window.addEventListener("resize",(e)=>{
        const _window = window
        if(window.innerWidth > 576){
            header?.classList.remove("open")
        }
    })
    const ref = useRef(null)
    const [visible,setVisible] = useState("hide")
    const handleClick = () => {

        const hamburger = document.querySelector("header#header .hamburger")
        if(!header?.classList.contains("open")){
            header?.classList.add("open")
        }else{
            header?.classList.remove("open")
        }


        const el2 = ref.current
        console.log(el2)
    }
    return (
        <header ref={ref} id="header">
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
                                <a className="button button-default" href="" onClick={test}>{translations.menu.joinUs} </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ModalService visible={visible} />
        </header>
    )
}

export default Header
