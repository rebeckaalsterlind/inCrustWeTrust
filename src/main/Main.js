import React, { useState, useEffect } from 'react';
import './main.css';
import Home from './Home';
import Contact from './Contact';
import Recipe from './Recipe';
import Dough from './Dough';


function Main({showSite}) {

  return (
    <main>
       {showSite === "home" && <Home />} 
      {showSite === "Dough" && <Dough />} 
      {showSite === "Recipe" && <Recipe />}
      {showSite === "Contact" && <Contact />} 
    </main>
  )
}

export default Main;