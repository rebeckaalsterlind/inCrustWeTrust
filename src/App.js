import './App.css';
import React, { useState } from 'react';
import Header from './header/Header.js';
import Main from './main/Main.js';


function App() {


  const [setSite, setShowSite] = useState("Home");

  return (
    <>
      <Header showSite={clickedLink => setShowSite(clickedLink)}/>
      <Main showSite={setSite}/>
    </>
  );
}

export default App;
