import React,{useState,useEffect} from 'react'
import Service from './Service'
import ModalService from 'components/Modal-Service'
import { baseUrl } from 'resources/api-constants'
import qs from 'qs'
import axios from 'axios'
import getContent from 'resources/translations'

const translations = getContent("services","az")

const Services: React.FC = () => {

    const [services, setServices] = useState<any>([])

    const ServicesQuery = qs.stringify(
        {
            sort: ['Name'],
            filters: {
                Active: {
                    $eq: true
                }
            },
            populate: '*',
            fields: ['Name', 'Description', 'Slug'],
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
            const data = await axios.get(`${baseUrl}/api/services?${ServicesQuery}`)
            setServices(data?.data.data)
            console.log(data?.data.data)
        }
        fetchProjects()
    }, [])

    return (
        <section className="container services">
            <h2 className="section-header">{translations.services}</h2>
            <div className="row">
            {services.map((service: any, i: number) => (
                    <div className="col-12 col-sm-6" key={i}>
                        <Service
                            Name={service.attributes.Name}
                            Slug={service.attributes.Slug}
                            Icon={service.attributes?.Icon?.data?.attributes?.url}
                            Description={service.attributes.Description}
                        />
                    </div>
                ))}
            </div>
            <ModalService visible="hide"/>
        </section>
    )
}

export default Services