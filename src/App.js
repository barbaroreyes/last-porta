import React from 'react';
import './App.css';
import Header from './component/header/header';
import Main from './component/main/index';
import Footer from './component/footer/footer'


function App() {
  return (
    <main className="App">
      <Header/>
      <Main/>
      <Footer/>
    </main>
  );
}

export default App;
