import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/slide-2.jpg'
import hero2 from '../../images/slider/slide-3.jpg'


class Hero2 extends Component {
    render() {

        var settings = {
            dots: true,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        return (
            <section className="hero hero-style-2">
                <div className="hero-slider">
                    <Slider {...settings}>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${hero1})` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col col-lg-5 slide-caption">
                                            <div className="slide-title">
                                                <h2>
                                                    <div className="slide-title first"><span>Tu</span></div>
                                                    <div className="slide-title first"><span>Vivero</span></div>
                                                    <div className="slide-title first"><span>Urbano</span></div>
                                                </h2>
                                            </div>
                                            <div className="btns">
                                                <Link to="/shop" className="btn theme-btn">Comprá ahora <i className="fa fa-angle-double-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${hero2})` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col col-lg-5 slide-caption">
                                            <div className="slide-title">
                                                <h2>
                                                    <div className="slide-title second">Con</div>
                                                    <div className="slide-title second">Ofertas</div>
                                                    <div className="slide-title seco">Unicas</div>
                                                </h2>
                                            </div>
                                            <div className="btns">
                                                <Link to="/shop" className="btn theme-btn">Compra ahora <i className="fa fa-angle-double-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        )
    }
}

export default Hero2;