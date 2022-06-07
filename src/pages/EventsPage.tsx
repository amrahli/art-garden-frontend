import React from 'react'
import { useState, useEffect } from 'react'
import qs from 'qs'
import axios from 'axios'
import Event from '../components/Event'
import Footer from 'components/Footer'
import Header from 'components/Header'


const EventsPage: React.FC = () => {
    const [events, setEvents] = useState<any>([])

    const EventsQuery = qs.stringify(
        {
            sort: ['id:desc'],
            filters: {
                // Active: {
                //     $eq: true
                // }
            },
            populate: '*',
            fields: ['Title', 'Description', 'Slug','Date'],
            pagination: {
                pageSize: 10,
                page: 1
            },
            publicationState: 'live',
            locale: ['en']
        },
        {
            encodeValuesOnly: true
        }
    )

    useEffect(() => {
        async function fetchEvents() {
            const data = await axios.get(`http://localhost:1337/api/events?${EventsQuery}`)
            setEvents(data?.data.data)
            console.log(data?.data.data)
        }
        fetchEvents()
    }, [])

    return (
      <>
      <Header />
      <section className="container projects">
            <h2 className="section-header">Projects</h2>
            <div className="row">
                <div></div>
                {events.map((event: any, i: number) => (
                    <div className="col-12 col-md-6 col-lg-4" key={i}>
                        <Event
                            Name={event.attributes.Title}
                            Slug={event.attributes.Slug}
                            CoverImage={"http://localhost:1337" + event.attributes.CoverImage?.data.attributes.url}
                            Description={event.attributes.Description}
                            Date={event.attributes.Date}
                        />
                    </div>
                ))}
            </div>
        </section>
        <Footer/>
      </>

    )
}

export default EventsPage
