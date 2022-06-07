import React from 'react'
import { useState, useEffect } from 'react'
import qs from 'qs'
import axios from 'axios'
import Event from './Event'

const Events: React.FC = () => {

  const [events, setEvents] = useState<any>([])

    const EventsQuery = qs.stringify(
        {
            sort: ['Date:desc'],
            filters: {

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
        async function fetchProjects() {
            const data = await axios.get(`http://localhost:1337/api/events?${EventsQuery}`)
            setEvents(data?.data.data)
            console.log(data?.data.data)
        }
        fetchProjects()
    }, [])


  return (
      <section className="container events">
          <h2 className="section-header">Events</h2>
          <div className='row'>
          {events.map((event: any, i: number) => (
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={i}>
                        <Event
                            Name={event.attributes.Title}
                            Slug={event.attributes.Slug}
                            Date={event.attributes.Date}
                            CoverImage={event.attributes.CoverImage? ("http://localhost:1337" + event.attributes.CoverImage?.data.attributes.url):("http://localhost:1337/uploads/image_placeholder_07279df127.png")}
                            Description={event.attributes.Description}
                        />
                    </div>
                ))}
          </div>
      </section>
  )
}

export default Events;