import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';
import Header from './Header.js';
import About from './About';

class Home extends Component {
  render() {
    return (
        <Router>
            <div className="app">
                <Header/>
                
                <Route path="/" exact strict render={
          () => {
            return (
            <div className="homePage">
              <div className="jumboHolder">
                 <div className="innerJumbo">
                   </div>

              </div>

              <div className="home-tiles">
              <div id="menu-tile">

                <a href="/aboutTest"><span>About</span></a>
              </div>
              <div id="specials-tile">
                <a href="/tutor">
                  <span>Tutor</span>
                </a>
              </div>
              <div id="quiz-tile">
                <a href="/quiz">
                <span>Quiz</span>
                </a>
              </div>
              </div>

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
