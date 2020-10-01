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
               <button className='btn1'><Link className='nav' to ="/" target='_black'>Home</Link></button>
               <button className='btn1'>< Link className='nav' to ="/about-Me" target='_black'>AboutMe</Link></button>
               <button className='btn1'>< Link  className='nav' to ="/resume" target='_black'>Resume</Link></button>
               <button className='btn1'> < Link  className='nav' to ="/contact" target='_black'>Contact</Link></button>
               <button className='btn1'> < Link  className='nav' to ="/projects" target='_black'>ProJects</Link></button> 
    </nav></div> 
       <Header/>
       <Footer/>
    </main>
  );
}

export default App;
