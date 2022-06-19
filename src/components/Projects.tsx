import React from 'react'
import { useState, useEffect } from 'react'
import qs from 'qs'
import axios from 'axios'
import Project from './Project'
import { baseUrl } from 'resources/api-constants'
import getContent from 'resources/translations'



const Projects: React.FC = () => {
    const [projects, setProjects] = useState<any>([])
    const translations = getContent('projects', 'az')
    const ProjectsQuery = qs.stringify(
        {
            sort: ['id:desc'],
            filters: {
                Active: {
                    $eq: true
                }
            },
            populate: '*',
            fields: ['Title', 'Description', 'Slug'],
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
            const data = await axios.get(`${baseUrl}/api/projects?${ProjectsQuery}`)
            setProjects(data?.data.data)
            console.log(data?.data.data)
        }
        fetchProjects()
    }, [])



        if(projects.length>0){
            return (
                <section className="container projects">
                    <h2 className="section-header">{translations.projects}</h2>
                    <div className="row">
                        <div></div>
                        {projects.map((project: any, i: number) => (
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" key={i}>
                                <Project
                                    name={project.attributes.Title}
                                    slug={project.attributes.Slug}
                                    image={project.attributes?.Image !== undefined? project.attributes?.Image?.data[0]?.attributes?.url: 'https://res.cloudinary.com/drxsywfuh/image/upload/v1655655238/medium_default_placeholder_3ee627c596.png'}
                                    description={project.attributes.Description}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            )
        }else{
            return (<></>)
        }

}

export default Projects
