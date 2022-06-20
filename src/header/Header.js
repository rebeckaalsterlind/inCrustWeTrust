import React, { useState, useEffect } from 'react';
import './header.css';
function Header({showSite}) {

  const [clickedLink, setClickedLink] = useState("Home");

  const handleClick = (e) => {
   
    if(e.target.innerHTML === "Opopoppa<br>pizza dough") {
      setClickedLink("Recipe")
    } else {
      setClickedLink(e.target.innerHTML)
    }

    showSite(clickedLink);
  }



  return (
    <nav>
      <div onClick={handleClick} >Opopoppa
        <br/>pizza dough
      </div>
      <ul>
        <li onClick={handleClick}>Recipe</li>
        <li onClick={handleClick}>Style</li>
        <li onClick={handleClick}>Dough</li>
        <li onClick={handleClick}>Contact</li>
      </ul>
    </nav>
  )
}

export default Header;