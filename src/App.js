import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";

import Navbar from "./component/Navbar";
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App(){
    return (
  <>
    <Router>
      <Navbar/>
        <div> 
      <Routes> 
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<AboutMe />} /> 
        <Route path='/education' element={<Education />} /> 
        <Route path='/skills' element={<Skills />} /> 
        <Route path='/contact' element={<Contact />} /> 
      </Routes>
        </div>
    </Router>
  </>
  );
}
  

export default App;