import React, { Component } from 'react'
import  '../assets/styles/components/Footer.scss'
import Githubw from '../assets/images/githubw.svg';
import Linkedinw from '../assets/images/linkedinw.svg';

export class Footer extends Component {
  render() {
    return (
      <div id="footer" className="pb-4 pt-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className='text-white text-left'>Designed and built by
                <br />Enrique Mejía Cano@2020
              </p> 
            </div>         
            <div className="col text-right">
              <a title="Github" href="https://github.com/enrimeca" target="_blank" rel="noopener" ><img src={ Githubw } className='social-logo mr-3 mt-2' alt='Github' /></a>
              <a title="Linkedin" href="https://www.linkedin.com/in/enriquemejiacano" target="_blank" rel="noopener" ><img src={ Linkedinw } className='social-logo mt-2' alt='Linkedin' /></a>

            </div>   
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
