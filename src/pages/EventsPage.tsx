import React from 'react'
import { useState, useEffect } from 'react'
import qs from 'qs'
import axios from 'axios'
import Events from '../components/Events'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { baseUrl } from 'resources/api-constants'


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
            fields: ['Title', 'Description', 'Slug', 'Date'],
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
            const data = await axios.get(`${baseUrl}/api/events?${EventsQuery}`)
            setEvents(data?.data.data)
            console.log(data?.data.data)
        }
        fetchEvents()
    }, [])

    return (
      <>
      <Header />
      <Events/>
        <Footer/>
      </>

    )
}

export default EventsPage
