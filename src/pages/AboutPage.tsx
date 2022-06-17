import React,{useState,useEffect} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import qs from 'qs'
import axios from 'axios'
import { baseUrl, getServiceFields,getProjects } from 'resources/api-constants'
import getContent from 'resources/translations'

const AboutPage: React.FC = () => {



    const [aboutContent,setAboutContent] = useState<any>()
    //const [translations,setTranslations] = useState<any>()
    const translations = getContent("about","az")

    const query = qs.stringify({
        populate: '*',
        fields: '*'
    })

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
                    <p>
                        {translations?.OurStory_Content}
                    </p>
                </article>
                <article className="join-us">
                    <div className="row">
                        <div className="col-8">
                            <p>
                                {aboutContent?.Banner_Content}
                            </p>
                        </div>
                        <div className="col-4">
                          <div className="button-container">
                          <a href={aboutContent?.Banner_ButtonUrl} className="button button-default">
                                {translations?.joinUs}
                            </a>
                          </div>

                        </div>
                    </div>
                </article>
                <article className="partnership">
                    <h2>{translations?.partnership}</h2>
                    <p>
                    {aboutContent?.Partnership_Content}
                    </p>
                </article>
                <article className="contacts">
                    <h2>{translations?.contact}</h2>
                    <p>
                        FORM
                    </p>
                </article>
            </section>

            <Footer />
        </>
    )
}

export default AboutPage
