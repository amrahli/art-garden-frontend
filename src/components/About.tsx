import React from 'react'
import Fields from './Fields'

const About: React.FC = () => {
    return (
        <section className='container who-we-are'>
            <h2 className="section-header">Who we are</h2>
            <div className="fields">
                <Fields />
            </div>
        </section>
    )
}

export default About
