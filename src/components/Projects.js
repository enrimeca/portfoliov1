import React, { Component } from 'react'
import '../assets/styles/components/About.scss';

import Show from '../assets/images/preview.svg'
import Github from '../assets/images/github.svg'


import Evzonature from '../assets/images/evzonatureDisplay.jpg';
import Project1 from '../assets/images/example.jpg';

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
                  <p className="card-text">Clean, minimalistic and very fast website.  Ecommerce of Eco Friendly Products.</p>
                  <div class="text-center"> 
                    <a class="btn btn-showInfo btn-block" href="#" data-toggle="modal" role="button" data-target="#exampleModal4" target="_blank">See more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <img className="card-img-top" src={Project1} alt="Apireyna" />
                <div className="card-body">
                  <div className="badges">
                    <span className="badge badge-warning mr-1">JavaScript</span>
                    <span className="badge badge-danger mr-1">Nextjs</span>
                    <span className="badge badge-success">Bootstrap</span>
                  </div>
                  <div className="card-title mt-2"><strong>Apireyna</strong></div>
                  <p className="card-text">Clean, minimalistic and very fast website.  Ecommerce of Eco Friendly Products.</p>
                  <div class="text-center"> 
                    <a class="btn btn-showInfo btn-block" href="#" data-toggle="modal" role="button" data-target="#exampleModal3" target="_blank">See more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <img className="card-img-top" src={Project1} alt="Piura Clases" />
                <div className="card-body">
                  <div className="badges">
                    <span className="badge badge-warning mr-1">JavaScript</span>
                    <span className="badge badge-danger mr-1">Nextjs</span>
                    <span className="badge badge-success">Bootstrap</span>
                  </div>
                  <div className="card-title mt-2"><strong>Piura Clases</strong></div>
                  <p className="card-text">Clean, minimalistic and very fast website.  Ecommerce of Eco Friendly Products.</p>
                  <div class="text-center"> 
                    <a class="btn btn-showInfo btn-block" href="#" data-toggle="modal" role="button" data-target="#exampleModal2" target="_blank">See more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img className="card-img-top" src={Project1} alt="Portfolio" />
              <div className="card-body">
                  <div className="badges">
                    <span className="badge badge-warning mr-1">JavaScript</span>
                    <span className="badge badge-danger mr-1">Nextjs</span>
                    <span className="badge badge-success">Bootstrap</span>
                  </div>
                  <div className="card-title mt-2"><strong>Portfolio</strong></div>
                  <p className="card-text">Clean, minimalistic and very fast website.  Ecommerce of Eco Friendly Products.</p>
                  <div class="text-center"> 
                    <a class="btn btn-showInfo btn-block" href="#" data-toggle="modal" role="button" data-target="#exampleModal1" target="_blank">See more</a>
                  </div>
                </div>
            </div>
          </div>
          </div>          
        </div>

        <div className="modal fade" id="exampleModal4" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-between">
                <a title="Code" href="https://github.com/enrimeca/evzonature" target="_blank" ><img src={ Github } className='icon-link' alt='Code' /></a>
                <a title="Live Demo" href="https://evzonature.vercel.app" target="_blank" ><img src={ Show } className='icon-link' alt='Live Demo' /></a>               
              </div>
              <div className="modal-body">
                
              <div id="carouselExample" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src={Project1} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Project1} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Project1} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Project1} />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>

              <div className="modal-body">
                <p>Evzonature.</p>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-outline-dark" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModal3" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-between">
                <a title="Code" href="https://github.com/enrimeca/evzonature" target="_blank" ><img src={ Github } className='icon-link' alt='Code' /></a>
                <a title="Live Demo" href="https://evzonature.vercel.app" target="_blank" ><img src={ Show } className='icon-link' alt='Live Demo' /></a>               
              </div>
              <div className="modal-body">
                
              <div id="carouselExample" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src={Project1} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Project1} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Project1} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Project1} />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>

              <div className="modal-body">
                <p>Apireyna</p>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-outline-dark" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-between">
                <a title="Code" href="https://github.com/enrimeca/evzonature" target="_blank" ><img src={ Github } className='icon-link' alt='Code' /></a>
                <a title="Live Demo" href="https://evzonature.vercel.app" target="_blank" ><img src={ Show } className='icon-link' alt='Live Demo' /></a>               
              </div>
              <div className="modal-body">
                
              <div id="carouselExample" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src={Project1} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Project1} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Project1} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Project1} />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>

              <div className="modal-body">
                <p>Piura Clases</p>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-outline-dark" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModal1" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-between">
                <a title="Code" href="https://github.com/enrimeca/evzonature" target="_blank" ><img src={ Github } className='icon-link' alt='Code' /></a>
                <a title="Live Demo" href="https://evzonature.vercel.app" target="_blank" ><img src={ Show } className='icon-link' alt='Live Demo' /></a>               
              </div>
              <div className="modal-body">
                
              <div id="carouselExample" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src={Project1} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Project1} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Project1} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Project1} />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>

              <div className="modal-body">
                <p>Portfolio</p>
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
