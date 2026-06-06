import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Publicas/Home';
import Login from '../pages/Publicas/LogIn';
import SignIn from '../pages/Publicas/SignIn';
import Coffee from '../pages/Publicas/Coffee';
import Community from '../pages/Publicas/Community';
import Contact from '../pages/Publicas/Contact';

const Routing = () => {
    return (
       <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/Coffee' element={<Coffee />} />
            <Route path='/Community' element={<Community />} />
            <Route path='/Contact' element={<Contact />} />
        </Routes>
        </Router>
    );
};

export default Routing;