import React from 'react'
import {Link} from 'react-router-dom'

import catimg from '../../images/category/icon-1.png'
import catimg2 from '../../images/category/icon-2.png'
import catimg3 from '../../images/category/icon-3.png'


const Category2 = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <section className={`category-area-s2 section-padding ${props.StyleClass}`}>
            <div className="container">
                <div className="category-wrap">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-12">
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src={catimg} alt=""/>
                                </div>
                                <div className="category-content">
                                    <h2 className="title-category"><Link onClick={ClickHandler} to="/shop">Plantas</Link></h2>
                                    <p>Descubre la magia de tener un rincón verde en tu hogar o oficina. En Green Lab, ofrecemos una selección exclusiva de plantas que no solo embellecen, sino que también purifican el aire y elevan tu bienestar. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-12">
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src={catimg2} alt=""/>
                                </div>
                                <div className="category-content">
                                    <h2 className="title-category"><Link onClick={ClickHandler} to="/shop">Flores</Link></h2>
                                    <p>Añade un toque de color y fragancia a tu hogar con nuestra selección de flores frescas. En Green Lab, ofrecemos una variedad de flores que no solo decoran, sino que también traen alegría y vida a cualquier rincón. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-12">
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src={catimg3} alt=""/>
                                </div>
                                <div className="category-content">
                                    <h2 className="title-category"><Link onClick={ClickHandler} to="/shop">Arboles</Link></h2>
                                    <p>Crea un oasis de tranquilidad y belleza con nuestros árboles de calidad. En Green Lab, ofrecemos una variedad de árboles que aportan sombra, frescura y un ambiente natural a tu espacio. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category2;