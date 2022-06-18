import React, { useState, useEffect, Dispatch } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import qs from 'qs'
import axios from 'axios'
import { baseUrl, getServiceFields, getProjects } from 'resources/api-constants'
import getContent from 'resources/translations'

const translations = getContent('about', 'az')


const AboutPage: React.FC = () => {
    const [aboutContent, setAboutContent] = useState<any>()
    //const [translations,setTranslations] = useState<any>()

    const [joinUsValues,setJoinUsValues] = useState<IFormInputs>()

    const query = qs.stringify({
        populate: '*',
        fields: '*'
    })

    interface IFormInputs{
        FullName: string,
        Email: string,
        Phone?: string,
        Message: string
    }

    const test = (e:any) => {
        e.preventDefault();
        const obj = {
            FullName:(document.getElementsByName("FullName")[0] as HTMLInputElement).value,
            Email:(document.getElementsByName("Email")[0] as HTMLInputElement).value,
            Phone:(document.getElementsByName("Phone")[0] as HTMLInputElement).value,
            Message:(document.getElementsByName("Message")[0] as HTMLTextAreaElement).value,
        }

        setJoinUsValues(obj);
        console.log(obj)

        axios.post(`${baseUrl}/api/join-requests`, {
            data: obj
        }).then(response=>{
            if(response.statusText=="OK"){
                alert("Your application is accepted!");
                (document.querySelector(".join-us-form form") as HTMLFormElement).reset()
            }else{
                alert("Something went wrong! Try again later!")
            }
        })
    }

    useEffect(() => {
        //const translations = getContent("test1","test2")

        console.log(translations)
        async function fetchProjects() {
            const data = await axios.get(`${baseUrl}/api/about-page?${query}`)
            setAboutContent(data?.data.data.attributes)
            console.log(data?.data.data.attributes)
        }
        fetchProjects()
    }, [])

    return (
        <>
            <Header />

            <section className="about">
                <h1 className="section-header">{translations?.aboutUs}</h1>
                <article className="our-story">
                    <h2>{translations?.ourStory}</h2>
                    <p>{translations?.OurStory_Content}</p>
                </article>
                <article className="join-us">
                    <h2 text-align="center">{translations?.joinUs}</h2>
                    <div className="row">
                        <div className="col-5">
                            <p className="join-us-banner-content">{aboutContent?.Banner_Content}</p>
                        </div>
                        <div className="col-7">
                            <div className="join-us-form">
                                <form action="">
                                    <div className="input-box">
                                        <label htmlFor="">{translations.fullName}</label>
                                        <input autoComplete='off' type="text" name="FullName" placeholder={translations.typeYourName} />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="">{translations.email}</label>
                                        <input autoComplete='off' type="email" name="Email" placeholder={translations.typeYourEmail}/>
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="">{translations.phoneNumber}</label>
                                        <input autoComplete='off' type="tel" name="Phone" placeholder={translations.typeYourPhone}/>
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="">{translations.yourMessage}</label>
                                        <textarea name="Message" placeholder={translations.typeYourMeesage}/>
                                    </div>
                                    <div className="g-recaptcha g-recaptcha-custom" data-sitekey="6Letg30gAAAAAL-BOKYZNel1i17QhLWfkIlYnPL0"></div>
                                    <div className="button-container">
                                        <button className="button button-default" type="button" onClick={test}>
                                            {translations?.joinUs}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="partnership">
                    <h2>{translations?.partnership}</h2>
                    <p>{aboutContent?.Partnership_Content}</p>
                </article>
                <article className="contacts">
                    <h2>{translations?.contact}</h2>
                </article>
            </section>

            <Footer />
        </>
    )
}

export default AboutPage
