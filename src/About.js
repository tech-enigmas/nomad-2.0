import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, ListGroup } from 'react-bootstrap';
import "./about.css";

class About extends Component {
  render() {
    return (
      <div className='about'>
        <Header/>
        <Container>
          <h1 className='text-center'>Developers</h1>
          <ListGroup>
            <ListGroup.Item>
              <span>Josh Hahn</span>
              <p>I'm a Software Developer with a background in aerospace maintenance and administration. Focused on quality and accessibility while maintaining efficient workflow and creativity. Veteran of the United States Air Force with a secret security clearance.</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Emily Greason</span>
              <p>I am a software developer using skills in React, NodeJS, HTML5, CSS3 and JavaScript. Upon completion, I'm interested in working in full stack software development implementing UX design to create user-friendly, customer oriented websites as well as designing and maintaining databases implementing scalable solutions.</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Jaye Rhinehart</span>
              <p>I am a full-stack web developer with skills in React, Vue.js, Node.js, HTML/CSS and JavaScript. I am passionate about making mine and others' visions come to life through code. My strengths include: problem solving, programming, thinking ahead, reliability, and paying attention to detail.</p>
            </ListGroup.Item>
          </ListGroup>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default About;
