import React from "react";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Footer from "./Footer";

const FooterContainer = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Footer />} />
                <Route path="/product" element={<Footer />} />
            </Routes>
        </Router>
    )
}
  
export default FooterContainer;