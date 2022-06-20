import React, { useState, useEffect } from 'react';
import Contact from './Contact';
import Recipe from './Recipe';
import Dough from './Dough';


function Main({showSite}) {

  return (
    <main>
      {showSite === "Dough" && <Dough />} 
      {showSite === "Recipe" && <Recipe />}
      {showSite === "Contact" && <Contact />} 
    </main>
  )
}

export default Main;