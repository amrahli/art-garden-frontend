import React from 'react'
import ReactMarkdown from 'react-markdown'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import qs from 'qs'
import { baseUrl, getServiceFields,getProjects } from 'resources/api-constants'

const ProjectPage: React.FC = () => {
    const { id } = useParams()
    const [locale, setLocale] = useState('en')
    const [project, setProject] = useState<any>()

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
            const data = await axios.get(`${baseUrl}/api/projects?${query}`)
            setProject(data?.data.data[0])
            console.log(data?.data.data[0])
        }
        fetchProjects()
    }, [])
    const test=()=>{
        alert("salam")

    }
    const bannerImageSrc = project?.attributes?.Image? baseUrl + project?.attributes?.Image?.data[0]?.attributes?.url : "http://localhost:1337/uploads/image_placeholder_07279df127.png"
    return (
        <>
            <Header />
            <article className="project">
                <div className="article-banner project-banner">
                    <div className="banner-image">
                        <img src={bannerImageSrc} alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className="article-header">
                        <h1>{project?.attributes?.Title}</h1>
                    </div>
                    <div className="article-extras"></div>
                    <div className="article-description">
                        <ReactMarkdown>{project?.attributes?.Description}</ReactMarkdown>
                    </div>
                    <div className="article-form">
                        <h2 className="form-header">Application Form</h2>
                        <form action="">
                            {project?.attributes?.form_fields?.data?.map((control: any, index: number) => {
                                return (
                                    <div key={index} className="input-box">
                                        <label htmlFor="">{control.attributes?.Label}</label>
                                        <input type={control.attributes?.Type} placeholder={control.attributes?.Placeholder} id={"input="+ control.attributes?.Label}/>
                                    </div>
                                )
                            })}
                            <div className="button-box">
                                <button id="submit" type="button" className="button button-default" onClick={test}>
                                    Apply
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </article>
            <Footer />
        </>
    )
}

export default ProjectPage
