import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './Experience.css';
import $ from 'jquery';


class Experience extends Component {
    constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
    
    this.state = {
      isClicked:false,
      isClickedTwo:false,
      isClickedThree:false,
      isClickedFour:false,
      isClickedFive:false,
      isClickedSix:false,
      isClickedSeven:false,
    };
  }

  handleClick(event){
    const id = event.currentTarget.id;
    if(id=="pone")
    this.setState(this.toggleClickState);  

    if(id=="ptwo")
    this.setState(this.toggleClickStateTwo);

    if(id=="pthree")
    this.setState(this.toggleClickStateThree);

    if(id=="pfour")
    this.setState(this.toggleClickStateFour);

    if(id=="pfive")
    this.setState(this.toggleClickStateFive);

    if(id=="psix")
    this.setState(this.toggleClickStateSix);

    if(id=="pseven")
    this.setState(this.toggleClickStateSeven);
  }
  
  toggleClickState(state) {
    return {
      isClicked: !state.isClicked,
    };
  }

  toggleClickStateTwo(state) {
    return {
      isClickedTwo: !state.isClickedTwo,
    };
  }

  toggleClickStateThree(state) {
    return {
      isClickedThree: !state.isClickedThree,
    };
  }

  toggleClickStateFour(state) {
    return {
      isClickedFour: !state.isClickedFour,
    };
  }

  toggleClickStateFive(state) {
    return {
      isClickedFive: !state.isClickedFive,
    };
  }
  
  toggleClickStateSix(state) {
    return {
      isClickedSix: !state.isClickedSix,
    };
  }
  toggleClickStateSeven(state) {
    return {
      isClickedSeven: !state.isClickedSeven,
    };
  }

 

    render() {

        return (
           <div className="app">
              <div className="gallery">
                <div className="bubbles" id="pone"
                  onClick={this.handleClick}
                  onMouseLeave={this.museLeave}>
                  <p id="textOne">Software Engineer <br/><br/>Fidelity Investments<br/><br/> August 2020 - Present</p>
                </div>
                              {
                                  this.state.isClicked && 
                                  <div id="myList"> 
                                 I am currently participating in Fidelity Investments Leap Software Engineering Track.
                                  <br/>Training in this track includes: 
                                  <ul>
                                      <li id="item">Object Oriented Analysis and Design</li>
                                      <li id="item">Dynamic Web Development with Angular</li>
                                      <li id="item">Git/Stash Training</li>
                                      <li id="item">Java, SQLPL, SQL, JDBC</li>
                                      <li id="item">Relational and NoSQL DB Training</li>
                                      <li id="item">Mastering Spring and MyBatis</li>
                                      <li id="item">Restful Services w/ Java</li>
                                      <li id="item">Restful Services w/ Node.js</li>
                                  </ul>
                                  -	I am also working on a project with the cloud unit,
                                  <br/>building on my understand of cloud technologies from my internship: 
                                  <ul>
                                      <li id="item">Docker</li>
                                      <li id="item">Kubernetes</li>
                                      <li id="item">AWS</li>
                                  </ul>

                                  <b>TAP AGAIN TO CLOSE</b>
                                  </div>
                             
                              }
                
                <div className="bubbles" id="ptwo"
                    onClick={this.handleClick}>
                  <p id="textOne">Technical Operations<br/><br/>Sentenial <br/><br/>January 2020 – August 2020</p>
                </div>

                        {
                          this.state.isClickedTwo &&
                          <div id="myList"> 
                              <ul>
                                  <li id="item">Day-to-day admin and maintenance systems support for software, hardware and servers</li>
                                  <li id="item">Install, configure, test and maintain operating systems, application software and system management tools</li>
                                  <li id="item">Write and maintain custom scripts to increase system efficiency and lower the human intervention time on any tasks (Bash & Python)</li>
                                  <li id="item">Gaining a basic understanding of : 
                                    <ul>
                                      <li> Cloud technologies (AWS) </li>
                                      <li> Leveraging the power of Virtual Machines </li>
                                      <li> Configuration Management Systems (CMS) with Puppet </li>
                                      <li>The DevOps Paradigm and CI/CD, an area of particular interest</li>
                                    </ul>
                                  </li>
                                  <li id="item">Using Python to interact with the operating system (Linux & Windows)</li>
                              </ul>  
                              <b>TAP AGAIN TO CLOSE</b>    
                          </div>
                          }
                
                <div className="bubbles" id="pthree"
                    onClick={this.handleClick}>
                  <p id="textOne">Construction Laborer/Machine Operator<br/><br/>Bennett Mechanical Installations (2001) Ltd<br/><br/> May 2018 – August 2019</p>
                </div>

                        {
                          this.state.isClickedThree &&
                          <div id="myList"> 
                              <ul>
                                  <li id="item">Worked as part of a team upgrading a major water reservoir in downtown Toronto</li>
                              </ul> 
                              <b>TAP AGAIN TO CLOSE</b>     
                          </div>
                        }
                
                <div className="bubbles" id="pfour"
                    onClick={this.handleClick}>
                  <p id="textOne">Urban Planning Internship<br/><br/>Tom Phillips & Associates<br/><br/> May 2016 – August 2016</p>
                </div>

                        {
                          this.state.isClickedFour &&
                          <div id="myList"> 
                              <ul>
                                  <li id="item">Conducting extensive research in specific or general project areas</li>
                                  <li id="item">Write and present formal technical reports on project areas</li>
                              </ul>   
                              <b>TAP AGAIN TO CLOSE</b>   
                          </div>
                        }
                
                <div className="bubbles" id="pfive"
                    onClick={this.handleClick}>
                  <p id="textOne">Internship - Software Testing<br/><br/>Sentenial<br/><br/> June 2015 – August 2015</p>
                </div>

                        {
                          this.state.isClickedFive &&
                          <div id="myList"> 
                              <ul>
                                  <li id="item">Identified ways to optimize the software to make it more efficient </li>
                              </ul>  
                              <b>TAP AGAIN TO CLOSE</b>    
                          </div>
                        }
                
                <div className="bubbles" id="psix"
                  onClick={this.handleClick}>
                  <p id="textOne">Sales Representative<br/><br/>Astra Marketing <br/><br/> Jan 2015 – May 2015</p>
                </div>

                        {
                          this.state.isClickedSix &&
                          <div id="myList"> 
                              <ul>
                                  <li id="item">Proactively sought new business opportunities in existing and potential business accounts </li>
                                  <li id="item">Maintained and grew the market share within a specific sales territory </li>
                              </ul> 
                              <b id="close">TAP AGAIN TO CLOSE</b>     
                          </div>
                        }
                
                <div className="bubblestwo">
                  <p id="textTwo">Click On A Bubble</p>
                </div>
                
                <div className="bubblestwo" id="pseven" onClick={this.handleClick}>
                  <p id="textTwo">Licenses</p>
                </div>
                        {
                          this.state.isClickedSeven &&
                          <div id="myList"> 
                              <ul>
                                  <li id="item">Oracle Certified Associate, Java SE 8 Programmer</li>
                                  <li id="item">AWS Certified Cloud Practitioner</li>
                              </ul> 
                              <b>TAP AGAIN TO CLOSE</b>     
                          </div>
                        }
              </div>
           </div>
        );
    }
}

export default Experience;
