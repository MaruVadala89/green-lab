import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

const Footer = (props) => {
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true); // Mostrar la alerta

    // Lógica para enviar el email, por ejemplo con una API

    // Resetea el campo de email después de enviar
    setEmail('');

    // Oculta la alerta después de 3 segundos
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <footer className="tp-site-footer">
      <div className="tp-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <Link onClick={ClickHandler} to="/"><img src={Logo} alt="ft-logo" /></Link>
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
                    <li><i className="fi flaticon-pin"></i>Bv. San Juan 100, Centro, Cordoba, Argentina.</li>
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
                <p>Si estás interesado en que te avisemos de nuestros descuentos, déjanos tu email.</p>
                <form onSubmit={handleSubmit}>
                  <div className="input-1">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address *"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ height: '45px', fontSize: '16px', padding: '10px' }}
                    />
                  </div>
                  <div className="submit clearfix">
                    <button type="submit"><i className="ti-email"></i></button>
                  </div>
                </form>
                {showAlert && (
                  <div className="alert alert-success mt-3" role="alert">
                    ¡Pronto te informaremos nuestros descuentos!
                  </div>
                )}
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
  );
};

export default Footer;

