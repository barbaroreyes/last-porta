import React from 'react';
import './header.css'
import {Switch, Route } from 'react-router-dom';
import Main from '../main/index';
import About from '../about-Me/about-Me';
import Resume from '../resume/resume';
import Contact from '../contact/contact';
import Projects from '../proJects/projects'






 

export default function Header() {
    return (
        <header>
           
          <Switch>
            <Route exact path ="/"         component={Main}/>  
            <Route       path ="/about-Me" component ={About}/> 
            <Route       path ="/resume"   component={Resume}/> 
            <Route       path= "/contact"   component= {Contact}/>
            <Route       path="/projects"    component={Projects}  />
          </Switch>
             
        </header>
    )
}
