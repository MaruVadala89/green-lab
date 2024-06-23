import React, { Fragment, useState } from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {totalPrice} from "../../utils";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../store/actions/action";

const CartPage = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const { carts } = props;


  return (
    <Fragment>
      <Navbar hClass={"header-style-2"} />
      <PageTitle pageTitle={"Carrito"} pagesub={"Carrito"} />
      <div className="cart-area section-padding">
        <div className="container">
          <div className="form">
            <div className="cart-wrapper">
              <div className="row">
                <div className="col-12">
                  <form action="cart">
                    <table className="table-responsive cart-wrap">
                      <thead>
                        <tr>
                          <th className="images images-b">Imagen</th>
                          <th className="product-2">Producto</th>
                          <th className="pr">Cantidad</th>
                          <th className="ptice">Precio</th>
                          <th className="stock">Total:</th>
                          <th className="remove remove-b">Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        {carts &&
                          carts.length > 0 &&
                          carts.map((catItem, crt) => (
                            <tr key={crt}>
                              <td className="images">
                                <img src={catItem.proImg} alt="" />
                              </td>
                              <td className="product">
                                <ul>
                                  <li className="first-cart">
                                    {catItem.title}
                                  </li>
                                  <li>Brand : {catItem.brand}</li>
                                  <li>Size : {catItem.size}</li>
                                </ul>
                              </td>
                              <td className="stock">
                                <div className="pro-single-btn">
                                  <Grid className="quantity cart-plus-minus">
                                    <Button
                                      className="dec qtybutton"
                                      onClick={() =>
                                        props.decrementQuantity(catItem.id)
                                      }
                                    >
                                      -
                                    </Button>
                                    <input value={catItem.qty} type="text" />
                                    <Button
                                      className="inc qtybutton"
                                      onClick={() =>
                                        props.incrementQuantity(catItem.id)
                                      }
                                    >
                                      +
                                    </Button>
                                  </Grid>
                                </div>
                              </td>
                              <td className="ptice">${catItem.qty * catItem.price}</td>
                              <td className="stock">${catItem.qty * catItem.price}</td>
                              <td className="action">
                                <ul>
                                  <li
                                    className="w-btn"
                                    onClick={() =>
                                      props.removeFromCart(catItem.id)
                                    }
                                  >
                                    <i className="fi flaticon-delete"></i>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </form>
                  <div className="submit-btn-area">
                    <ul>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          className="theme-btn"
                          to="/shop"
                        >
                          Continuar comprando{" "}
                          <i className="fa fa-angle-double-right"></i>
                        </Link>
                      </li>
                      <li>
                        <button type="submit">Carrito</button>
                      </li>
                    </ul>
                  </div>
                  <div className="cart-product-list">
                    <ul>
                      <li>
                        Total de productos<span>( {carts.length} )</span>
                      </li>
                      <li className="cart-b">
                        Precio total:<span>${totalPrice(carts)}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="submit-btn-area">
                    <ul>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          className="theme-btn"
                          to="/checkout"
                        >
                          Termina tu compra{" "}
                          <i className="fa fa-angle-double-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};
export default connect(mapStateToProps, {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
})(CartPage);
