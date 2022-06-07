import React from 'react'
import { useState, useEffect } from 'react'
import qs from 'qs'
import axios from 'axios'
import Project from './Project'

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<any>([])

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
            const data = await axios.get(`http://localhost:1337/api/projects?${ProjectsQuery}`)
            setProjects(data?.data.data)
            console.log(data?.data.data)
        }
        fetchProjects()
    }, [])

    return (
        <section className="container projects">
            <h2 className="section-header">Projects</h2>
            <div className="row">
                <div></div>
                {projects.map((project: any, i: number) => (
                    <div className="col-12 col-sm-6" key={i}>
                        <Project
                            name={project.attributes.Title}
                            slug={project.attributes.Slug}
                            image={"http://localhost:1337" + project.attributes.Image?.data[0].attributes.url}
                            description={project.attributes.Description}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects