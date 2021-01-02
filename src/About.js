import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './About.css';



class About extends Component {

    

    render() {
        
        
           

        return (
           <div className="app">
               <div className="aboutMe"> 
               
                        <p id="pone">
                            Hi! I’m Derry and I am a Software Engineer working with the Cloud Computing unit in Fidelity Investments. 
                            As an Under-Grad, I studied Geography(Urbanization) & Economics at Maynooth University.
                        </p>
                            
                        <p> 
                            Here I developed a strong interest of the application of technology in the urban realm, 
                            in particular its use in solving human-centric problems. 
                            My thesis sought to identify the extent in which digital platforms can be used in cities in regard to optimising the use of space by enabling the 
                            efficient use of idle assets.
                        </p>

                        <p id="ptwo">
                            After graduating from university in 2018, I took a gap year and moved back to Toronto 
                            (I also studied there for a year in 2016/17). As planned, I then returned to Ireland to undertake a post-grad in 
                            Software Development. Throughout this I got some work experience with a Tech-Ops team where
                            developed a passion for the Cloud & the DevOps space.
                            I then joined Fidelity Investments as a Software Engineering Associate. 
                            Here, I work with cutting edge technology on exciting projects 😄. Technolgies include Kubernetes & GoLang
                        </p>
                        
                        <p> 
                            I am very passionate about systems of interrelated devices that have the ability to transfer data over a network with no human intervention ie - IoT.
                            I am also very interested in learning and applying how The Cloud can pave the way for this data to travel.
                         </p>
                </div>

    
           </div>
        );
    }
}

export default About;
