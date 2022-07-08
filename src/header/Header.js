import React, { useState, useEffect } from 'react';
import './header.css';
function Header({showSite}) {

  const [clickedLink, setClickedLink] = useState("Home");

  const handleClick = (e) => {
   
    if(e.target.innerHTML === "In Crust We Trust") {
      setClickedLink("Recipe")
    } else {
      setClickedLink(e.target.innerHTML)
    }

    showSite(clickedLink);
  }



  return (
    <nav>
      <aside onClick={handleClick} >In Crust We Trust
      </aside>
      <ul>
        <li onClick={handleClick}>Recipe</li>
        <li onClick={handleClick}>Dough</li>
        <li onClick={handleClick}>Contact</li>
      </ul>
    </nav>
  )
}

export default Header;