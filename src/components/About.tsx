import React from 'react'
import Fields from './Fields'
import getContent from 'resources/translations'

const translations = getContent("about","az")

const About: React.FC = () => {
    return (
        <section className='container who-we-are'>
            <h2 className="section-header">{translations.whoWeAre}</h2>
            <div className="fields">
                <Fields />
            </div>
        </section>
    )
}

export default About
