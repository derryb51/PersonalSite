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
              <Navbar></Navbar>
              <div id="image-holder"/>
              
              <div id="profile-photo"></div>
              <div id="name">Derry Bradley</div>
              <div id="occupation">Software|Cloud Engineer</div> 
              <li> <Link className="individual_item" to='/aboutTest'>About</Link></li>

         
              
           

            </div>);
          }
        }/>
        
            </div>
        
      </Router>
        
  
    );
  }
}

export default Home;
