import React, { ReactNode } from 'react'

interface Props {
    name: string
    image: string
    slug: string
    description: string
}

const Project: React.FC<Props> = ({ name, image, slug, description }) => {
    return (
        <div className="project-container card">
            <div className="project">
                <div className="project-image">
                    <img src={image} alt={name} />
                </div>
                <div className="project-named card-title">{name}</div>
                <div className="project-content">{description}</div>
                <div className="button-container">
                    <a className="button button-default" href={"/projects/"+slug}>More</a>
                </div>
            </div>
        </div>
    )
}

export default Project
