import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './Contact.css';
import { SocialIcon } from 'react-social-icons';



class Contact extends Component {
  
    render() {
     

        return (
           <div className="app">
             

            
                <ul className="socialLinks">
                    <li>
                        <div className='nav-item'><SocialIcon url="https://github.com/derryb51" bgColor="rgb(26, 37, 73)"
                        fgColor="#dddddd" title="Github" style={{ height: 350, width: 350 }} /></div>
                    </li>
                    <li>
                        <div className='nav-item'><SocialIcon url="https://gitlab.com/derryb51" bgColor="rgb(26, 37, 73)" 
                        fgColor="#dddddd" title="Gitlab" style={{ height: 350, width: 350 }} /></div>
                    </li>
               
                    <li>
                        <div className='nav-item'><SocialIcon url="https://www.linkedin.com/in/derrybradley203/"
                        bgColor="rgb(26, 37, 73)" fgColor="#dddddd" title="LinkedIn" style={{ height: 350, width: 350 }} /></div>
                    </li>
                    <li>
                        <div className='nav-item'><SocialIcon url="mailto: derrybradley199611@gmail.com" bgColor="rgb(26, 37, 73)" 
                        fgColor="#dddddd" title="Email" style={{ height: 350, width: 350 }} /></div>
                    </li>
                </ul>

                
                
              
           </div>
           
        );    }
}

export default Contact;
