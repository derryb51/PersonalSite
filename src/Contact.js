import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './Contact.css';
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




class Contact extends Component {
  
    render() {
     

        return (
           <div className="app">
             
            
                    <a href="mailto: derrybradley199611@gmail.com" className='my-links'><FontAwesomeIcon icon="envelope"title="Email"  /></a>
              
                
                
                    <a href="https://www.linkedin.com/in/derrybradley203/" className='my-links' id="linkedin"><FontAwesomeIcon icon={['fab', 'linkedin']} title="LinkedIn"/></a>
                
        
                
                    <a href="https://github.com/derryb51" className='my-links'><FontAwesomeIcon icon={['fab', 'github']} title="Github"/></a>
                

               
                    <a href="https://gitlab.com/derryb51" className='my-links'><FontAwesomeIcon icon={['fab', 'gitlab']} title="Gitlab" /></a>
               
        
         
           </div>
           
        );    }
}

export default Contact;
