import React, { Component } from 'react'
import '../assets/styles/components/Projects.scss';

import Show from '../assets/images/preview.svg'
import Github from '../assets/images/github.svg'


import Evzonature from '../assets/images/evzonatureDisplay.jpg';
import Apireyna from '../assets/images/apireynaDisplay.jpg';
import Clases from '../assets/images/piuraclasesDisplay.jpg';
import Portfolio from '../assets/images/PortfolioDisplay.jpg';


import p1 from '../assets/images/p1.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';


import apir1 from '../assets/images/apir1.jpg';
import apir2 from '../assets/images/apir2.jpg';
import apir3 from '../assets/images/apir3.jpg';

import evz1 from '../assets/images/evz1.jpg';
import evz2 from '../assets/images/evz2.jpg';
import evz3 from '../assets/images/evz3.jpg';

import portf1 from '../assets/images/port1.jpg';
import portf2 from '../assets/images/port2.jpg';
import portf3 from '../assets/images/port3.jpg';

export class Projects extends Component {
  render() {
    return (
      <div id="projects" className="section">
        <div className="container mt-2 mb-2 section-inner">
          <div className="row">
            <div className="col mx-3 mb-3">
              <h2>Projects</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">                                
                <img className="card-img-top" src={Evzonature} alt="Evzonature" />
                <div className="card-body">
                  <div className="badges">
                    <span className="badge badge-warning mr-1">JavaScript</span>
                    <span className="badge badge-danger mr-1">Nextjs</span>
                    <span className="badge badge-success">Bootstrap</span>
                  </div>
                  <div className="card-title mt-2"><strong>Evzonature</strong></div>
                  <p className="card-text">Clean, minimalistic and very fast website.  Ecommerce of eco friendly products.</p>
                  <div className="text-center"> 
                    <a className="btn btn-showInfo btn-block" href="#" data-toggle="modal" role="button" data-target="#exampleModal4" target="_blank">See more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <img className="card-img-top" src={Apireyna} alt="Apireyna" />
                <div className="card-body">
                  <div className="badges">
                    <span className="badge badge-warning mr-1">JavaScript</span>
                    <span className="badge badge-info mr-1">Reactjs</span>
                    <span className="badge badge-success">Bootstrap</span>
                  </div>
                  <div className="card-title mt-2"><strong>Apireyna</strong></div>
                  <p className="card-text">This site shows information about the company and its products. </p>
                  <div className="text-center"> 
                    <a className="btn btn-showInfo btn-block" href="#" data-toggle="modal" role="button" data-target="#exampleModal3" target="_blank">See more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <img className="card-img-top" src={Clases} alt="Piura Clases" />
                <div className="card-body">
                  <div className="badges">
                    <span className="badge badge-warning mr-1">JavaScript</span>
                    <span className="badge badge-info mr-1">Reactjs</span>
                    <span className="badge badge-success mr-1">Bootstrap</span>
                    <span className="badge badge-dark">API</span>
                  </div>
                  <div className="card-title mt-2"><strong>Piura Clases</strong></div>
                  <p className="card-text">Website for registration of participants in an online class.</p>
                  <div className="text-center"> 
                    <a className="btn btn-showInfo btn-block" href="#" data-toggle="modal" role="button" data-target="#exampleModal2" target="_blank">See more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img className="card-img-top" src={Portfolio} alt="Portfolio" />
              <div className="card-body">
                  <div className="badges">
                    <span className="badge badge-warning mr-1">JavaScript</span>
                    <span className="badge badge-info mr-1">Reactjs</span>
                    <span className="badge badge-success">Bootstrap</span>
                  </div>
                  <div className="card-title mt-2"><strong>Portfolio</strong></div>
                  <p className="card-text">Personal website and portfolio.  Designed and developed with a conscious effort to improve the SEO, performance and responsiveness.</p>
                  <div className="text-center"> 
                    <a className="btn btn-showInfo btn-block" href="#" data-toggle="modal" role="button" data-target="#exampleModal1" target="_blank">See more</a>
                  </div>
                </div>
            </div>
          </div>
          </div>          
        </div>

        <div className="modal fade" id="exampleModal4" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog custom-modal" role="document">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-between">
                <a title="Code" href="https://github.com/enrimeca/evzonature" target="_blank" rel="noopener" ><img src={ Github } className='icon-link' alt='Code' /></a>
                <a title="Live Demo" href="https://evzonature.vercel.app" target="_blank" rel="noopener" ><img src={ Show } className='icon-link' alt='Live Demo' /></a>               
              </div>
              <div className="modal-body">
                
              <div id="carouselExample4" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src={evz1} />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={evz2} />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={evz3} />
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExample4" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExample4" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>

              <div className="modal-body section-inner">
                <p>Clean, minimalistic and very fast website.  Ecommerce of Eco Friendly Products.</p>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-outline-dark" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModal3" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog custom-modal" role="document">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-between">
                <a title="Code" href="https://github.com/enrimeca/apireyna" target="_blank" rel="noopener" ><img src={ Github } className='icon-link' alt='Code' /></a>
                <a title="Live Demo" href="https://apireyna.vercel.app" target="_blank" rel="noopener" ><img src={ Show } className='icon-link' alt='Live Demo' /></a>               
              </div>
              <div className="modal-body">
                
              <div id="carouselExample3" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src={apir1} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={apir2} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={apir3} />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExample3" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExample3" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>

              <div className="modal-body section-inner">
                <p>This site shows information about the company and its products.</p>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-outline-dark" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog custom-modal" role="document">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-between">
                <a title="Code" href="https://github.com/enrimeca/registroParticipantes" target="_blank" rel="noopener" ><img src={ Github } className='icon-link' alt='Code' /></a>
                <a title="Live Demo" href="https://regparticipantes.vercel.app" target="_blank" rel="noopener" ><img src={ Show } className='icon-link' alt='Live Demo' /></a>               
              </div>
              <div className="modal-body">
                
              <div id="carouselExample2" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src={p1} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={p2} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={p3} />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExample2" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExample2" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>

              <div className="modal-body section-inner">
                <p>Website for registration of participants in an online class.</p>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-outline-dark" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModal1" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog custom-modal" role="document">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-between">
                <a title="Code" href="https://github.com/enrimeca/portfoliov1" target="_blank" rel="noopener" ><img src={ Github } className='icon-link' alt='Code' /></a>
                <a title="Live Demo" href="https://enriquemejiacano.vercel.app/" target="_blank" rel="noopener" ><img src={ Show } className='icon-link' alt='Live Demo' /></a>               
              </div>
              <div className="modal-body">
                
              <div id="carouselExample1" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src={portf1} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={portf2} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={portf3} />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExample1" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExample1" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>

              <div className="modal-body section-inner">
                <p>Personal website and portfolio.  Designed and developed with a conscious effort to improve the SEO, performance and responsiveness.</p>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-outline-dark" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
