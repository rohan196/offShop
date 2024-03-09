import React from 'react'
import HomeDiscountSection from './HomeDiscountSection'
import HomeNavbarSection from './HomeNavbarSection'
import HomeRectangle from './HomeRectangle'
import HomeBrands from './HomeBrands'
import Browsedressstyle from './home/Browsedressstyle'
import ProductDetailHome from './productDetailPage/ProductDetailHome'
import CategoryPage from './categoryPage/CategoryPage'
import HomeFooter from './HomeFooter'
import Suggestions from './Suggestions'
import Cart from './Cart/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login'




const Home = () => {
  return (
    // <Router>
      <>
      {/* <HomeDiscountSection/>
      <HomeNavbarSection/>   */}
      {/* <Routes>
        <Route path="" element={<HomeRectangle/>}/>
        <Route path="/" element={<HomeRectangle/>}/>

        <Route path="/HomeRectangle" element={<HomeRectangle/>}/>
        <Route path="/HomeBrands" element={<HomeBrands />} />
        <Route path="/Browsedressstyle" element={<Browsedressstyle />} />
        <Route path="/ProductDetailHome" element={<ProductDetailHome />} />
        <Route path="/Suggestions" element={<Suggestions />} />
        <Route path="/CategoryPage" element={<CategoryPage />} />
        <Route path="/Cart" element={<Cart />} />
        <Home />
      </Routes>
      <HomeFooter/> */}

        <HomeDiscountSection/>
        <HomeNavbarSection/>  
        <HomeRectangle/>
        <HomeBrands/>
        <Browsedressstyle/>
        <ProductDetailHome/>
        <Suggestions/>
        <CategoryPage/>
        <Cart />
      </>
      )
    }


export default Home