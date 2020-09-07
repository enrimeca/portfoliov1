import React, { Component } from 'react'
import  '../assets/styles/components/Footer.scss'

export class Footer extends Component {
  render() {
    return (
      <div id="footer" className="pb-4 pt-4">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h5 className='footer-text'>Designed and built by</h5> 
              <h4 className='footer-text'>Enrique Mejía Cano</h4>
            </div>            
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
