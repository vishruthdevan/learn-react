import React from "react";
// react router
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Switch,
} from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/people" element={<People />} />
                <Route path="/error" element={<Error />} />
                <Route path="/person" element={<Person />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
};

export default ReactRouterSetup;
