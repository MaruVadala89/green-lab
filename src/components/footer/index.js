import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/logo.png'


const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="tp-site-footer">
        <div className="tp-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <Link onClick={ClickHandler} to="/"><img src={Logo} alt="ft-logo"/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget tp-service-link-widget">
                            <div className="widget-title">
                                <h3>Contacto </h3>
                            </div>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-pin"></i>Bv. San Juan 100, Centro, Cordoba, Argentina.
                                    </li>
                                    <li><i className="fi flaticon-call"></i>+54 9 351 2340056</li>
                                    <li><i className="fi flaticon-envelope"></i>greenlab@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Mi cuenta</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/cart">Carrito</Link></li>
                                <li><Link onClick={ClickHandler} to="/shop">Shop</Link></li>
                                <li><Link onClick={ClickHandler} to="/wishlist">Favoritos</Link></li>
                                <li><Link onClick={ClickHandler} to="/checkout">Terminá tu compra</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget newsletter-widget">
                            <div className="widget-title">
                                <h3>Descuentos</h3>
                            </div>
                            <p>Si estas interesad@ que te avisemos de nuestros descuentos, dejanos tu email.</p>
                            <form>
                                <div className="input-1">
                                    <input type="email" className="form-control" placeholder="Email Address *" required/>
                                </div>
                                <div className="submit clearfix">
                                    <button type="submit"><i className="ti-email"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div className="tp-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> Copyright &copy; 2023 Maru Vadala - Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;