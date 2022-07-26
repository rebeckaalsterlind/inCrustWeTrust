
import React, { useState } from 'react';
import Header from './header/Header.js';
import Main from './main/Main.js';
import Footer from './footer/Footer.js'


function App() {

  const [page, setPage] = useState("calculator");

  return (
    <>
      <Header getPage={clickedLink => setPage(clickedLink)}/>
      <Main page={page}/>
      <Footer />
    </>
  );
}

export default App;
