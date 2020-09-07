import React, { Component } from 'react'
import '../assets/styles/components/About.scss';
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
                
                <a className="nav-link" href="#" data-toggle="modal" data-target="#exampleModal">Live Demo</a>
                
                <img className="card-img-top" src={Project1} alt="Foto de Sacha" />
                <div className="card-body">
                  <div className="badges">
                    <span className="badge badge-warning mr-1">JavaScript</span>
                    <span className="badge badge-danger mr-1">Nextjs</span>
                    <span className="badge badge-success">Bootstrap</span>
                  </div>
                  <div className="card-title mt-2"><strong>Evzonature</strong></div>
                  <p className="card-text">Clean, minimalistic and very fast Ecommerce.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <img className="card-img-top" src={Project1} alt="Foto de Sacha" />
                <div className="card-body">
                  <div className="badges">
                    <span className="badge badge-warning mr-1">JavaScript</span>
                    <span className="badge badge-info">React</span>
                  </div>
                  <div className="card-title mt-2"><strong>Apireyna</strong></div>
                  <p className="card-text">Vivamus quam mi, egestas eu metus id, mollis suscipit ipsum. In vel mollis mauris. Nunc id sem a lacus tincidunt pretium in in urna. Nam mi nisi, tincidunt ac tincidunt id, fermentum at metus.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <img className="card-img-top" src={Project1} alt="Foto de Sacha" />
                <div className="card-body">
                  <div className="badges">
                    <span className="badge badge-secondary mr-1">Piura Clases</span>
                    <span className="badge badge-danger">Startups</span>
                  </div>
                  <div className="card-title mt-2"><strong>Piura Clases</strong></div>
                  <p className="card-text">Vivamus quam mi, egestas eu metus id, mollis suscipit ipsum. In vel mollis mauris. Nunc id sem a lacus tincidunt pretium in in urna. Nam mi nisi, tincidunt ac tincidunt id, fermentum at metus.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img className="card-img-top" src={Project1} alt="Foto de Sacha" />
              <div className="card-body">
                <div className="badges">
                  <span className="badge badge-secondary mr-1">Piura Clases</span>
                  <span className="badge badge-danger">Startups</span>
                </div>
                <div className="card-title mt-2"><strong>Portfolio - Enrique Mejía</strong></div>
                <p className="card-text">Vivamus quam mi, egestas eu metus id, mollis suscipit ipsum. In vel mollis mauris. Nunc id sem a lacus tincidunt pretium in in urna. Nam mi nisi, tincidunt ac tincidunt id, fermentum at metus.</p>
              </div>
            </div>
          </div>
          </div>          
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
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
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni harum voluptatibus sit doloribus sed dignissimos, blanditiis voluptate id cupiditate pariatur possimus, qui tenetur repellat minima architecto placeat corporis minus amet.</p>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
