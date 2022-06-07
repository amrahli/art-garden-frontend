import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import About from '../components/About'

const AboutPage: React.FC = () => {
    return (
        <>
            <Header />

            <section className="about">
                <h1 className="section-header">Haqqımızda</h1>
                <article className="our-story">
                    <h2>Hekayəmiz</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, velit numquam. At blanditiis quibusdam ut, nesciunt sed dicta ipsum
                        mollitia modi molestias accusantium quidem necessitatibus optio eos! Libero, veritatis similique.
                    </p>
                </article>
                <article className="join-us">
                    <div className="row">
                        <div className="col-8">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur est, doloribus accusamus aut.
                            </p>
                        </div>
                        <div className="col-4">
                          <div className="button-container">
                          <a className="button button-default" href="">
                                Join us
                            </a>
                          </div>

                        </div>
                    </div>
                </article>
                <article className="partnership">
                    <h2>Tərəfdaşlıq</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in at vel corporis nobis debitis aspernatur a amet ex facilis nisi
                        reiciendis, hic laborum quos eligendi totam sunt impedit odio.
                    </p>
                </article>
                <article className="contacts">
                    <h2>Bizimlə əlaqə</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in at vel corporis nobis debitis aspernatur a amet ex facilis nisi
                        reiciendis, hic laborum quos eligendi totam sunt impedit odio.
                    </p>
                </article>
            </section>

            <Footer />
        </>
    )
}

export default AboutPage
