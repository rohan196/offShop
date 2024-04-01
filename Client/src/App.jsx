import HomeRectangle from "./components/HomeRectangle";
import HomeNavbarSection from "./components/HomeNavbarSection";
import HomeBrands from "./components/HomeBrands";
import Home from "./components/Home";
import HomeDiscountSection from "./components/HomeDiscountSection";
import Login from "./components/Login/Login";

import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Register from "./components/Register/Register";
import { UserProvider  } from "./components/Context/UserContext";
import CartRouter from "./components/CartRouter";



function App() {


  return (
    <Router>
      <UserProvider >
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register  />} />
        <Route path="/cart" element={<CartRouter />} />
        {/* <Home /> */}
      </Routes> 
      </UserProvider>
    </Router>
  );
}

export default App;
