import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage2 from '../HomePage2'
import ShopPage from '../ShopPage'
import ProductDetailsPage from '../ProductDetailsPage'
import CheckoutPage from '../CheckoutPage'
import OrderRecived from '../OrderRecived'
import CartPage from '../CartPage'
import WishlistPage from '../WishlistPage'
import ProjectSinglePage from '../ProjectSinglePage'
import ProjectPage from '../ProjectPage'
import ErrorPage from '../ErrorPage'
import ContactPage from '../ContactPage'
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage2 />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/product-single/:id' element={<ProductDetailsPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/order_received' element={<OrderRecived />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/project-single' element={<ProjectSinglePage />} />
          <Route path='/project' element={<ProjectPage />} />
          <Route path='/404' element={<ErrorPage />} />
          <Route path='/contact' element={<ContactPage />} />
         
    
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<SignUpPage />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AllRoute;
