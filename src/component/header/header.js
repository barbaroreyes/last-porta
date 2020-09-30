import React from 'react'

export default function header() {
    return (
        <div>
              <nav style={{height:'50px'}}>
                <button className='btn1'>< a className='nav' href ="/">Home</a></button>
                <button className='btn1'>< a target="_blank"  className='nav' href ="/aboutMe">AboutMe</a></button>
                <button className='btn1'>< a target="_blank"  className='nav' href ="/resume">Resume</a></button>
                <button className='btn1'><a target="_blank"  className='nav' href ="/contact">Contact</a></button>
                <button className='btn1'> <a target="_blank"  className='nav' href="/projects">Proyects</a></button>                          
              </nav>
        </div>
    )
}
