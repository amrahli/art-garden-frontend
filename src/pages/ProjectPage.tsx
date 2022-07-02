import React from 'react'
import ReactMarkdown from 'react-markdown'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import qs from 'qs'
import { baseUrl, getServiceFields, getProjects } from 'resources/api-constants'
import getContent from 'resources/translations'

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
    const translations = getContent('projects', 'az')

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
        validateForm()
    }, [])

    let z = ''

    const validateForm = () => {
        const inputElements = document.forms[0].elements
        const inputElementCount = document.querySelectorAll("form .validate").length
        console.log(inputElementCount)

        for (let i = 0; i < inputElements.length; i++) {

            if(inputElements[i].classList.contains("validate")){
                console.log((inputElements[i] as HTMLFormElement).value)
                console.log((inputElements[i] as HTMLFormElement).name)
                if ((inputElements[i] as HTMLFormElement).value === '') {
                    (inputElements[i] as HTMLFormElement).classList.add('error')
                    return false;
                }else{
                    (inputElements[i] as HTMLFormElement).classList.remove('error')
                }
            }
        }
        return true;
    }

    const removeError = () => {
        const inputElements = document.forms[0].elements

        for (let i = 0; i < inputElements.length; i++) {

                (inputElements[i] as HTMLFormElement).classList.remove('error')
        }
        return false
    }

    const test = () => {
        if (validateForm()) {
            project?.attributes?.form_fields?.data?.forEach((control: any, index: number) => {
                console.log(control.attributes.Name)
                let value = ''
                if (control.attributes.Type === 'textarea') {
                    value = (document.getElementsByName(control.attributes.Name)[0] as HTMLTextAreaElement).value
                } else {
                    value = (document.getElementsByName(control.attributes.Name)[0] as HTMLInputElement).value
                }
                z += control.attributes?.Label + ': ' + value + '\n'
            })
            setStringToSend(z)

            axios
                .post(`${baseUrl}/api/applicants`, {
                    data: {
                        Extras: z
                    }
                })
                .then((response) => {
                    if (response.statusText == 'OK') {
                        alert('Müraciətiniz qəbul edildi!')
                        ;(document.querySelector('.project form') as HTMLFormElement).reset()
                    } else {
                        alert('Bir az sonra yenidən cəhd edin')
                    }
                })
        }else{
            alert("Doldurulmamış xanalar mövcuddur")
        }
    }
    const bannerImageSrc = project?.attributes?.CoverImage
        ? project?.attributes?.CoverImage?.data?.attributes?.url
        : 'https://res.cloudinary.com/drxsywfuh/image/upload/v1655655238/medium_default_placeholder_3ee627c596.png'
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
                        <h2 className="form-header">{translations?.applicationForm}</h2>
                        <form action="">
                            <input type="hidden" name="Project" value={project?.attributes?.Title} />
                            {project?.attributes?.form_fields?.data
                                ?.sort((a: any, b: any) => a.attributes?.Order - b.attributes?.Order)
                                .map((control: any, index: number) => {
                                    if (control.attributes?.Type === 'textarea') {
                                        return (
                                            <div key={index} className="input-box">
                                                <label htmlFor="">{control.attributes?.Label}</label>
                                                <textarea className="validate" onFocus={removeError} name={control.attributes?.Name} placeholder={control.attributes?.Placeholder} required />
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div key={index} className="input-box">
                                                <label htmlFor="">{control.attributes?.Label}</label>
                                                <input
                                                    className="validate"
                                                    name={control.attributes?.Name}
                                                    type={control.attributes?.Type}
                                                    placeholder={control.attributes?.Placeholder}
                                                />
                                            </div>
                                        )
                                    }
                                })}
                            <div className="g-recaptcha g-recaptcha-custom" data-sitekey="6Letg30gAAAAAL-BOKYZNel1i17QhLWfkIlYnPL0"></div>
                            <div className="button-box">
                                <button id="submit" type="button" className="button button-default" onClick={test}>
                                    {translations?.apply}
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
