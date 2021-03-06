import React, { Component } from 'react';
import './contact.css';
import work from '../../work.jpg';



    export default class Contact extends Component {
        render() {
            return (
         <div className='contact-body'>
                            <div style={{display:'flex',flexDirection:'column'}}>
                            <h1 style={{marginLeft:'20px'}}>Barbaro Reyes</h1>
                            <img className='pict' src={work} alt='avatar'style={{width:'200px',marginLeft:'10px'}}/>
                             <p style={{width:'50%',margin:'auto',paddingTop:'1em'}}>With a huge desire to bring smart ideas to the Digital World</p>
                          </div>    
                         <h6>Contact me</h6>
                           
                    <div className='contact-list'>
                        <ul>
                         <li><article style={{fontSize:'25px',fontFamily:'Averia Gruesa Libre'}} >
                                <i className="fas fa-phone-square">(512)6086054</i>
                                <li><i class="fas fa-envelope-square"><a href='barbarotrabajo@gmail.com'><p><a className='nav' href="mailto:barbarotrabajo@gmail.com?subject= Hey Barbaro, I'm interested in hearing from you! " target='_black'>Email Me</a></p></a></i></li>
                                </article>
                            </li>
                            <li><article style={{fontSize:'25px',fontFamily:'Averia Gruesa Libre'}} >
                                <i class="fab fa-github"><a className='nav' href ='https://github.com/barbaroreyes' target='_black'>https://github.com/barbaroreyes</a></i>
                                </article>
                            </li>
                            <li><article style={{fontSize:'25px',fontFamily:'Averia Gruesa Libre'}} >
                                 <i className=" link fab fa-linkedin"><a className='nav' href='https://www.linkedin.com/in/barbaro-reyes-b023aa1a7/' target='_black'>https://www.linkedin.com/in/barbaro-reyes-b023aa1a7/</a></i>
                                </article>
                            </li>
                            <div className='socials-liks'>
                                    <a className ='link' href="https://www.linkedin.com/in/barbaro-reyes" rel='noopener noreferrer' target='_black'>
                                    <i className=" fab fa-linkedin"></i>
                                    </a>
                                    <a href="https://github.com/barbaroreyes" rel='noopener noreferrer' target='_black'>
                                 <i className="fab fa-github-square"></i></a> 
                            </div>
                        </ul>
                    </div>     
            </div>
            )
        }
    }
