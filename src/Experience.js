import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './Experience.css';


class Experience extends Component {
    constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
}
    render() {

        return (
           <div className="app">
               <div className="myExperience"> 
            
            <p className="bubbles" id="pone"
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}>
            Associate Full Stack Software Engineer| Fidelity Investments| August 2020 - Present
            </p>
                {
                this.state.isHovering &&
                <div className="myList"> 
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
                </div>
                }

<div id="items">    
    <div className="item"><div className="inner">text 1<br/>text 1<br/>text 1</div></div>
    <div className="item"><div className="inner">text 2<br/>text 2<br/>text 2</div></div>
    <div className="item"><div className="inner">text 3<br/>text 3<br/>text 3</div></div>
</div>

            
                

    </div>
           </div>
        );
    }
}

export default Experience;
