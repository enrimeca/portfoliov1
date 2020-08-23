import React, { Component } from 'react'
import '../assets/styles/components/About.scss';
import about from '../assets/images/about.jpg'

export class About extends Component {
  render() {
    return (
      <div id="about" className="section">
        <div className="container mt-2 mb-2 section-inner">
          <div className="row">
            <div className="col m-3">
              <h2>About me</h2>

            </div>
          </div>
          <div className="row">
            <div className="col mx-3">
              <p>
              I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
              Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.
              Here are a few technologies I've been working with recently:
              </p>               
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ul className='skills-list'>
                  <li>-JavaScript (ES6+)</li>                
                  <li>-HTML & (S)CSS</li>
                  <li>-React</li>                
                  <li>-Bootstrap</li>
                  <li>-Node.js</li>
                  <li>-Gatsby</li>
              </ul>   
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
