import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./pages/login";
import Register from "./pages/register";
import HomeRedirect from "./components";

function App() {
    return(
        <Router>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<HomeRedirect />} />
                </Routes>
        </Router>
    )
}

export default App

