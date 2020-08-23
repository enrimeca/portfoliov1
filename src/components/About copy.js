import React, { Component } from 'react'
import about from '../assets/images/about.jpg'

export class About extends Component {
  render() {
    return (
      <div id="about">
          <div className="container">
            <div className="row h-100">
              <div className="col-xs-12 col-md-6"> <img src={about} className="img-responsive" alt=""/> </div>
              <div className="col-xs-12 col-md-6 my-auto">
                <div className="about-text">
                  <h2>About Us</h2>
                  <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                  <h3>Why Choose Us?</h3>
                  <div className="list-style">
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                      </ul>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                      {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default About
