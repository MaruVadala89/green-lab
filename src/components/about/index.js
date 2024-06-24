import React from 'react'
import abimg from '../../images/abou2.jpg'


const About = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="about-section section-padding p-t-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-lg-5 col-12">

                        <div className="video-area">
                            <img src={abimg} alt="" />
                        </div>

                    </div>

                    <div className="col col-lg-7 col-12">
                        <div className="about-area">
                            <div className="about-wrap">
                                <div className="about-title">
                                    <small>Acerca de nosotros</small>
                                    <h2>Green Lab: <span>tu refugio</span> verde</h2>
                                </div>
                                <p>En Green Lab, nos apasiona la naturaleza y nos dedicamos a cultivar vida desde su origen. Nuestro vivero es un oasis donde cada planta, árbol y flor es cultivado con amor y dedicación, comenzando desde una pequeña semilla. </p>
                                <p>Desde plantas de interior que purifican tu aire, hasta majestuosos árboles que transforman tu jardín, y flores que embellecen cualquier espacio, en Green Lab encontrarás todo lo que necesitas para crear tu propio paraíso verde. Creemos en el poder de la naturaleza para mejorar nuestro bienestar y entorno, y estamos comprometidos a ofrecerte productos de la más alta calidad.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;