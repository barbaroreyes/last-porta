import React from 'react';
import './App.css';
import './component/header/header.css';
import{Link}from 'react-router-dom';
import Footer from  './component/footer/footer';
import Header from './component/header/header';
  


function App() {
  return (
    <main className="App">
      <div><nav>
               <button  className='btn1'><Link className='nav' to ="/" >Home</Link></button>
               <button className='btn1'><Link  className='nav' to ="/about-Me">About-Me</ Link></button>
               <button className='btn1'><Link  className='nav' to ="/resume">Resume</Link></button>
               <button className='btn1'><Link  className='nav' to ="/contact">Contact</Link></button>
               <button className='btn1'><Link  className='nav' to ="/projects">Projects</Link></button>
               </nav></div> 
       <Header/>
       <Footer/>
    </main>
  );
}

export default App;
