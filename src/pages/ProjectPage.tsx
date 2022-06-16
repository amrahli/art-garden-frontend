import React from 'react'
import ReactMarkdown from 'react-markdown'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import qs from 'qs'
import { baseUrl, getServiceFields, getProjects } from 'resources/api-constants'

interface IDataToSend {
    Name: string
    Value: string
}

interface IApplication {
    FullName?: string
    Email?: string
    Phone?: string
    Extras?: string
    project?: number
}

const ProjectPage: React.FC = () => {
    const { id } = useParams()
    const [locale, setLocale] = useState('en')
    const [project, setProject] = useState<any>()
    const [dataToSend, setDataToSend] = React.useState<Array<IDataToSend>>([])
    const [stringToSend, setStringToSend] = React.useState('')
    const [application, setApplication] = React.useState<IApplication>({})

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

    let z = ''

    const test = () => {
        {
            project?.attributes?.form_fields?.data?.forEach((control: any, index: number) => {
                const inputValue = (document.getElementsByName(control.attributes.Name)[0] as HTMLInputElement).value
                const defaultControls = ['FullName', 'Email', 'Phone']

                if (!defaultControls.includes(control.attributes.Name)) {
                    console.log(control.attributes.Name)
                    z += control.attributes?.Label + ': ' + (document.getElementsByName(control.attributes.Name)[0] as HTMLInputElement).value + '\n'
                }
            })
        }
        setStringToSend(z)

        axios.post(`${baseUrl}/api/applicants`, {
            data: {
                Extras: z,
                FullName: (document.getElementsByName('FullName')[0] as HTMLInputElement).value,
                Email: (document.getElementsByName('Email')[0] as HTMLInputElement).value,
                Phone: (document.getElementsByName('Phone')[0] as HTMLInputElement).value
            }
        }).then(response=>{
            if(response.statusText=="OK"){
                alert("Your application is accepted!");
                (document.querySelector(".project form") as HTMLFormElement).reset()
            }else{
                alert("Something went wrong! Try again later!")
            }
        })
    }
    const bannerImageSrc = project?.attributes?.Image
        ? project?.attributes?.Image?.data[0]?.attributes?.url
        : 'http://localhost:1337/uploads/image_placeholder_07279df127.png'
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
                            <input type="hidden" name="" value={project?.attributes?.Title} />
                            {project?.attributes?.form_fields?.data?.map((control: any, index: number) => {
                                return (
                                    <div key={index} className="input-box">
                                        <label htmlFor="">{control.attributes?.Label}</label>
                                        <input name={control.attributes?.Name} type={control.attributes?.Type} placeholder={control.attributes?.Placeholder} />
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
