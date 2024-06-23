import React, { useState } from "react";
import { Link } from "react-router-dom";
import DefaultModal from "../Modal";

const ProductList = ({ products, addToCartProduct,addToWishListProduct }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const [open, setOpen] = React.useState(false);

  function handleClose() {
    setOpen(false);
  }

  const [state, setState] = useState({});

  const handleClickOpen = (item) => {
    setOpen(true);
    setState(item);
  };

  return (
    <div className="product-list">
        <div className="product-wrap">
          <div className="row align-items-center">
            {products.length > 0 &&
              products.slice(0,18).map((product, pitem) => (
                <div className="col-xl-12 col-12" key={pitem}>
                    <div className="product-item">
                      <div className="product-img">
                        <img src={product.proImg} alt="" />
                        <ul>
                          <li>
                            <button
                              data-bs-toggle="tooltip"
                              data-bs-html="true"npm
                              title="Add to Cart"
                              onClick={() => addToCartProduct(product)}
                            >
                              <i className="fi flaticon-shopping-cart"></i>
                            </button>
                          </li>
                          <li>
                            <button
                                  data-bs-toggle="tooltip"
                                  data-bs-html="true"
                                  title="Add to Cart"
                                  onClick={() => handleClickOpen(product)}
                                >
                                  <i className="fi ti-eye"></i>
                              </button>
                          </li>
                          <li>
                            <button
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Add to Cart"
                                onClick={() => addToWishListProduct(product)}
                            >
                                <i className="fi flaticon-like"></i>
                            </button>
                          </li>
                        </ul>
                        <div className="offer-thumb">
                          <span>{product.offer}</span>
                        </div>
                      </div>
                      <div className="product-content">
                        <h3>
                          <Link onClick={ClickHandler} onClick={ClickHandler} to={`/product-single/${product.id}`}>
                            {product.title}
                          </Link>
                        </h3>
                        <div className="product-btm">
                        <div className="product-price">
                      <ul>
                        <li>${product.price}</li>
                        {product.delPrice && <li>{product.delPrice}</li>}
                      </ul>
                    </div>
                  </div>
                  {product.description.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>  
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
          <DefaultModal
            addToCartProduct={addToCartProduct}
            open={open}
            onClose={handleClose}
            product={state}
          />
        </div>
    </div>
  );
};

export default ProductList;


