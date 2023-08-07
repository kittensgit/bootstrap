import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navibar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <Navibar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
