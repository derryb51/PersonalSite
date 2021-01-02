import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './About.css';



class About extends Component {

    

    render() {
        
        
           

        return (
           <div className="app">
               <div className="aboutMe"> 
               
                        <p id="pone">
                            Hi! I’m Derry and I am a Software Engineer working with a Cloud Computing unit in Fidelity Investments. 
                            As an Under-Grad, I studied Geography(Urbanization) & Economics at Maynooth University.
                        </p>
                            
                        <p> 
                            Here I developed a strong interest of the application of technology in the urban realm, 
                            in particular its use in solving human-centric problems. 
                            My thesis sought to identify the extent to which digital platforms are used in cities to enable 
                            the efficient use of otherwise underused assets.
                        </p>

                        <p id="ptwo">
                            After graduating from university in 2018, I took a gap year and moved back to Toronto 
                            (I also studied there for a year). As planned, I then returned to Ireland to undertake a post-grad in 
                            Software Development. Throughout this I got some work experience with a Tech-Ops tean where
                            developed a passion for the Cloud & the DevOps space.
                        </p>
                        
                        <p> 
                            I then joined Fidelity Investments as a Software Engineering Associate. 
                            Here, I work with cutting edge technology on exciting projects 😄.
                        </p>
                </div>

    
           </div>
        );
    }
}

export default About;
