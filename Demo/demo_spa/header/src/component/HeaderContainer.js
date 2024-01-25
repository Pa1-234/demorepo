import React from "react";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./Header";

const HeaderContainer = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Header />} />
            </Routes>
        </Router>
    )
}
  
export default HeaderContainer;