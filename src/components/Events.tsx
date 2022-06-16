import React from 'react'
import { useState, useEffect } from 'react'
import qs from 'qs'
import axios from 'axios'
import Event from './Event'
import { baseUrl } from 'resources/api-constants'

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
            const data = await axios.get(`${baseUrl}/api/events?${EventsQuery}`)
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
                            CoverImage={event.attributes.CoverImage? (event.attributes.CoverImage?.data.attributes.url):(`https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png`)}
                            Description={event.attributes.Description}
                        />
                    </div>
                ))}
          </div>
      </section>
  )
}

export default Events;