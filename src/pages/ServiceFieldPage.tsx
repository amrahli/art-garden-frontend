import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ReactMarkdown from 'react-markdown'
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import qs from 'qs'
import axios from 'axios'
import { baseUrl, getServiceFields,getProjects } from 'resources/api-constants'

const ServiceFieldPage: React.FC = () => {
    const { id } = useParams()
    const [locale, setLocale] = useState('en')
    const [serviceField, setServiceField] = useState<any>()

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
            const data = await axios.get(`${baseUrl}/api/service-fields?${query}`)
            setServiceField(data?.data.data[0])
            console.log(data?.data.data[0])
        }
        fetchProjects()
    }, [])
    console.log(id)
    console.log(serviceField)

    return (
        <>
            <Header />

            <section className="about service-field-about">
                <h1 className="section-header">{serviceField?.attributes?.Name.toString()}</h1>
                <img className="section-image" src={serviceField?.attributes?.Images?.data[0].attributes.url} alt="" />
                <article className="our-story">
                    <h2>Haqqımızda</h2>
                    <p>
                    {serviceField?.attributes?.About}
                    </p>
                </article>
            </section>

            <Footer />
        </>
    )
}

export default ServiceFieldPage
