
import React, { useState } from 'react';
import Header from './header/Header.js';
import Main from './main/Main.js';
import Footer from './footer/Footer.js'


function App() {


  const [setSite, setShowSite] = useState("Home");

  return (
    <>
      <Header showSite={clickedLink => setShowSite(clickedLink)}/>
      <Main showSite={setSite}/>
      <Footer />
    </>
  );
}

export default App;
