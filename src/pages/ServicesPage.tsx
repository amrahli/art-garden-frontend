import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'
import Service from 'components/Service'

const ServicesAPI = [
    { name: 'Art studio', slug:'', icon: '/images/icons/paint.png' },
    { name: 'Library', slug:'', icon: '/images/icons/idea.png' },
    { name: 'Tours', slug:'', icon: '/images/icons/compass.png' },
    { name: 'Mountaineering', slug:'', icon: '/images/icons/keyboard.png' },
    { name: 'Exhibitions', slug:'', icon: '/images/icons/lamp.png' },
    { name: 'Masterclasses', slug:'', icon: '/images/icons/guides.png' },
    { name: 'Event hall', slug:'', icon: '/images/icons/guides.png' }
]

const ServicesPage: React.FC = () => {
    return (
        <>
        <Header />
        <section className="container services">
            <h2 className="section-header">Services</h2>
            <div className="row">
                {ServicesAPI.map((data) => (
                    <div key={data.name} className="col-4">
                        <Service  name={data.name} slug={data.slug} icon={data.icon} />
                    </div>
                ))}
            </div>
        </section>
        <Footer />
        </>

    )
}

export default ServicesPage
