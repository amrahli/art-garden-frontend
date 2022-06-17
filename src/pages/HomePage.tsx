import React from 'react'
import {useState,useEffect} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Events from '../components/Events'
import Footer from '../components/Footer'
import axios from 'axios'
import qs from 'qs'
import ModalService from 'components/Modal-Service'

const HomePage: React.FC = () => {

    const [events, setEvents] = useState<any>()

    

    return (
        <>
            <Header />
            <Banner />
            <About />
            <Services/>
            <Projects />
            <Events />
            <Footer />
        </>
    )
}

export default HomePage
