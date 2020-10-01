import React from 'react';
import './App.css';
import './component/header/header.css';
import{Link}from 'react-router-dom';
import Footer from  './component/footer/footer'
import Header from './component/header/header';

function App() {
  return (
    <main className="App">
      <div><nav style={{margin:'10px',padding:'10px'}}>
               <button className='btn1'><Link className='nav' to ="/">Home</Link></button>
               <button className='btn1'>< Link className='nav' to ="/about-Me">AboutMe</Link></button>
               <button className='btn1'>< Link  className='nav' to ="/resume">Resume</Link></button>
               <button className='btn1'> < Link  className='nav' to ="/contact">Contact</Link></button>
               <button className='btn1'> < Link  className='nav' to ="/projects">ProJects</Link></button> 
    </nav></div> 
       <Header/>
       <Footer/>
    </main>
  );
}

export default App;
