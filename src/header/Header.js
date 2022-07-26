import React, { useState, useEffect } from 'react';
import './header.css';

function Header({getPage}) {

  const [showPage, setShowPage] = useState("calculator");

  useEffect(() => {
    getPage(showPage)
  }, [showPage])
  return (
    <nav>
      <h1>In Crust We Trust</h1>
      <h2>Pizza dough - bakers percentages</h2>
      <ul>
        <li id="calculator" onClick={(e) => setShowPage(e.target.id)}>Calculator</li>
        <li id="recipies" onClick={(e) => setShowPage(e.target.id)} >Recipes</li>
      </ul>
    </nav>
  )
}

export default Header;