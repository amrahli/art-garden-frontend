import React,{useState,useEffect} from 'react'
import Footer from '../components/Footer'
import qs from 'qs'
import axios from 'axios'
import { baseUrl, getServiceFields,getProjects } from 'resources/api-constants'
import Header from '../components/Header'
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom'

const EventPage: React.FC = () => {
    const { id } = useParams()
    const [locale, setLocale] = useState('en')
    const [event, setEvent] = useState<any>()

    const query = qs.stringify({
        filters: {
            Slug: {
                $eq: id
            }
        },
        populate: '*',
        fields: '*'
    })

    useEffect(() => {
        async function fetchProjects() {
            const data = await axios.get(`${baseUrl}/api/events?${query}`)
            setEvent(data?.data.data[0])
            console.log(data?.data.data[0])
        }
        fetchProjects()
    }, [])

    const CoverImageSrc = event?.attributes?.CoverImage? event?.attributes?.CoverImage?.data?.attributes?.url : "http://localhost:1337/uploads/image_placeholder_07279df127.png"

    return (
        <>
            <Header />
            <article className="project container">
                <div className="article-banner project-banner">
                    <div className="banner-image">
                        <img src={CoverImageSrc} alt="" />
                    </div>
                    <div className="article-header">
                        <h1>{event?.attributes?.Title}</h1>
                    </div>
                    <div className="article-extras"></div>
                    <div className="article-description">
                        <p>
                            {event?.attributes?.Description}
                        </p>
                    </div>
                </div>
            </article>
            <Footer />
        </>
    )
}

export default EventPage
