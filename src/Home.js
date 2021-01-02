import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './Home.css';
import About from './About.js';
import Background from './assets/Toronto.jpg';
import Navbar from './Navbar.js';

class Home extends Component {

  
  render() {
    return (
      <Router>
            <div className="app">
              <Route path="/" exact strict render={
          () => {
            return (
            <div className="homePage">
              <div id="image-holder"/>
              <div id="profile-photo"></div>
              <div id="name">Derry Bradley</div>
              <div id="occupation">Software Engineer</div> 
             
            </div>);
          }
        }/>
        <Route path ="/about" exact strict component={About}/>
        
        
            </div>
        
      </Router>
        
  
    );
  }
}

export default Home;
