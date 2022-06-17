import React,{useState,useEffect} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import qs from 'qs'
import axios from 'axios'
import { baseUrl, getServiceFields,getProjects } from 'resources/api-constants'

const AboutPage: React.FC = () => {

    const [aboutContent,setAboutContent] = useState<any>()
    const query = qs.stringify({
        populate: '*',
        fields: '*'
    })

    useEffect(() => {
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
                <h1 className="section-header">Haqqımızda</h1>
                <article className="our-story">
                    <h2>{aboutContent?.OurStory_Header}</h2>
                    <p>
                        {aboutContent?.OurStory_Content}
                    </p>
                </article>
                <article className="join-us">
                    <div className="row">
                        <div className="col-8">
                            <p>
                                {aboutContent.Banner_Content}
                            </p>
                        </div>
                        <div className="col-4">
                          <div className="button-container">
                          <a href={aboutContent.Banner_ButtonUrl} className="button button-default">
                                {aboutContent.Banner_ButtonText}
                            </a>
                          </div>

                        </div>
                    </div>
                </article>
                <article className="partnership">
                    <h2>{aboutContent?.Partnership_Header}</h2>
                    <p>
                    {aboutContent?.Partnership_Content}
                    </p>
                </article>
                <article className="contacts">
                    <h2>{aboutContent?.Contact_Header}</h2>
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
