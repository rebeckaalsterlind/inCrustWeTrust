import React, { useState, useEffect } from 'react';
import './header.css';
function Header({showSite}) {

  const [clickedLink, setClickedLink] = useState("home");

  //avoid state in parent updating on second click
  useEffect(() => {
    showSite(clickedLink);
  }, [clickedLink])

  return (
    <nav>
      <aside id="home" onClick={(e) => setClickedLink(e.target.id)} >In Crust <br/>We Trust
      </aside>
      <ul>
        <li onClick={(e) => setClickedLink(e.target.innerHTML)}>Recipe</li>
        <li onClick={(e) => setClickedLink(e.target.innerHTML)}>Dough</li>
        <li onClick={(e) => setClickedLink(e.target.innerHTML)}>Contact</li>
      </ul>
    </nav>
  )
}

export default Header;