import React, { Component } from 'react'
import '../assets/styles/components/Header.scss';
import photo from '../assets/images/profile.jpg';
import Linkedin from '../assets/images/linkedin.svg';
import Resume from '../assets/images/resume.svg';

export class Header extends Component {
  render() {
    return (
      <header id="header" className="section">
        <div className="container mt-2 mb-2 section-inner">
          <div className="row h-100">
            <div className="col-md-6 col-12">
            <img className="profile-image img-fluid rounded-circle mx-auto d-block pb-3" src={photo} alt="profile image" />
            </div>
            <div className="col-md-6 col-12 my-auto">
              <div className="container">
                <h4 className='title'>Hi, my name is</h4>
                <h1 className='name'>Enrique Mejía</h1>
                <p className='description'>I'm a software engineer based in Piura, Peru specializing in building and designing websites with Javascript and other technologies.</p>
                <p className='description pb-3'><strong>enriquemejiacano@gmail.com</strong></p>
                <a title="Linkedin" href="https://www.linkedin.com/in/enriquemejiacano/" target="_blank" rel="noopener" ><img src={ Linkedin } className='social-logo' alt='Linkedin' /></a>
                <a title="Resume" href="https://www.linkedin.com/in/enriquemejiacano/" target="_blank" rel="noopener" ><img src={ Resume } className='social-logo ml-4' alt='Linkedin' />(es)</a>
                <a title="Resume"  href="https://www.linkedin.com/in/enriquemejiacano/" target="_blank" rel="noopener" ><img src={ Resume } className='social-logo ml-4' alt='Linkedin' />(en)</a>
              </div>               
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
