import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import FilterSidebar from "../../components/FilterSidebar";
import FilterAllProduct from "../../components/FilterAllProduct";
import api from "../../api";
import { addToCart, addToWishList } from "../../store/actions/action";

const ShopPage = ({ addToCart, addToWishList }) => {
  const productsArray = api();

  const [filter, setFilter] = useState({
    price: "",
    category: "",
    clase: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const priceChangeHandler = ({ target: { name, value } }) => {
    const val = typeof value === "string" ? JSON.parse(value) : value;
    setFilter({ ...filter, [name]: val });
  };

  const changeHandler = ({ target: { name, value } }) => {
    setFilter({ ...filter, [name]: value });
  };

  const priceFIlter = (price) => {
    if (filter.price === "") {
      return true;
    } else if (filter.price.max && filter.price.min) {
      return price <= filter.price.max && price >= filter.price.min;
    } else if (filter.price.min) {
      return price >= filter.price.min;
    } else {
      return false;
    }
  };

  const addToCartProduct = (product) => {
    addToCart(product, 1, filter.category);
  };

  const products = productsArray
    .filter((el) => priceFIlter(el.price))
    .filter((el) => (filter.category ? el.category === filter.category : true))
    .filter((el) => (filter.clase ? el.clase === filter.clase : true))
    .filter((el) => el.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const addToWishListProduct = (products) => {
    addToWishList(products);
  };

  return (
    <Fragment>
      <Navbar hClass={"header-style-2"} />

      <PageTitle pageTitle={"Shop"} />

      <div className="shop-section">
        <div className="container">
          <div className="row">
            <FilterSidebar
              filter={filter}
              priceChangeHandler={priceChangeHandler}
              changeHandler={changeHandler}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <FilterAllProduct
              addToCartProduct={addToCartProduct}
              addToWishListProduct={addToWishListProduct}
              products={products}
            />
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default connect(null, { addToCart, addToWishList })(ShopPage);
