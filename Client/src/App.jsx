import HomeRectangle from "./components/HomeRectangle";
import HomeNavbarSection from "./components/HomeNavbarSection";
import HomeBrands from "./components/HomeBrands";
import Home from "./components/Home";
import HomeDiscountSection from "./components/HomeDiscountSection";
import Login from "./components/Login/Login";
import HomeFooter from './components/HomeFooter'

import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Register from "./components/Register/Register";
import { UserProvider  } from "./components/Context/UserContext";
import CartRouter from "./components/CartRouter";
import AddProduct from "./components/AddProduct";
import ProductDetails from "./components/productDetailPage/ProductDetails";
import { ToastContainer } from "react-toastify";



function App() {


  return (
    <Router>
      {/* <AuthProvider> */}
      <UserProvider >
      <ToastContainer />
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register  />} />
        <Route path="/cart" element={<CartRouter />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* <Route path="/HomeFooter" element={<HomeFooter />} /> */}
        {/* <Home /> */}
      </Routes> 
      </UserProvider>
      {/* </AuthProvider> */}
    </Router>
  );
}

export default App;
