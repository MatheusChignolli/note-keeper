import React from 'react';
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Note from './components/Note/Note';

function App() {
  return (
    <>
      <Header/>
      <div className={"content-body"}>
        <Note h1="Testando sapoha" content="Conteúdo sapoha"/>
        <Note h1="Testando Aquelapoha" content="Conteúdo aquelapoha"/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
