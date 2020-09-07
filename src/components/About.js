import React, { Component } from 'react'
import '../assets/styles/components/About.scss';

export class About extends Component {
  render() {
    return (
      <div id="about" className="section">
        <div className="container mt-2 mb-2 section-inner">
          <div className="row">
            <div className="col mx-3">
              <h2>About me</h2>

            </div>
          </div>
          <div className="row">
            <div className="col mx-3">
              <p>I have been building web applications for years and I have experience working with several technologies like Javascript, C# .Net, SQL Server, and PL/SQL. Also, I have strong skills in HTML5, CSS3, ES6+, Javascript, and Agile methodologies.</p>
              <p>I'm constantly learning web technologies, currently playing around React and Javascript.</p>
              <p>At present, I am looking for a position as a Front-end Developer or related position where I could improve my knowledge and my capabilities.</p>
              <p>Here are a few technologies I've been working with recently:</p>               
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ul className='skills-list'>
                  <li>-JavaScript (ES6+)</li>                
                  <li>-HTML & (S)CSS</li>
                  <li>-React</li>                
                  <li>-Bootstrap</li>
                  <li>-Nextjs</li>
                  <li>-Node.js</li>
              </ul>   
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
