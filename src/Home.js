import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './Home.css';
import Background from './assets/Toronto.jpg';

var sectionStyle = {
  width: "100%",
  height: "1000px",
  backgroundImage: "url(" + Background + ")"
};

class Home extends Component {
  render() {
    return (

            <div className="app">
                
                <div id="full-size">
                Your contents go here
                </div>

              
        
       
            </div>
        

        
  
    );
  }
}

export default Home;
