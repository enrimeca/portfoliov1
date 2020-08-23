import React, { Component } from 'react'
import '../assets/styles/components/Header.scss';
import photo from '../assets/images/profile.jpg';

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
                <p className='description'>I'm a software engineer based in Piura, Perú specializing in building and designing websites with Javascript and other technologies.</p>
                <a className="btn btn-linkedin mr-2" href="https://www.linkedin.com/in/enriquemejiacano/" role="button" target="_blank">Linkedin</a>  
                <a className="btn btn-resume" href="#" role="button" target="_blank">Resume</a>  
              </div>               
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
