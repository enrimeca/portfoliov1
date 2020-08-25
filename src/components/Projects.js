import React, { Component } from 'react'
import '../assets/styles/components/About.scss';
import Project1 from '../assets/images/example.jpg';

export class Projects extends Component {
  render() {
    return (
      <div id="projects" className="section">
        <div className="container mt-2 mb-2 section-inner">
          <div className="row">
            <div className="col mx-3">
              <h2>Projects</h2>
            </div>
          </div>
          <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              
               <a className="nav-link" href="#">Live Demo</a>
              
              <img className="card-img-top" src={Project1} alt="Foto de Sacha" />
              <div className="card-body">
                <div className="badges">
                  <span className="badge badge-warning">JavaScript</span>
                  <span className="badge badge-info">React</span>
                </div>
                <h5 className="card-title mt-2">Sacha Lifszyc</h5>
                <p className="card-text">Vivamus quam mi, egestas eu metus id, mollis suscipit ipsum. In vel mollis mauris. Nunc id sem a lacus tincidunt pretium in in urna. Nam mi nisi, tincidunt ac tincidunt id, fermentum at metus.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img className="card-img-top" src={Project1} alt="Foto de Sacha" />
              <div className="card-body">
                <div className="badges">
                  <span className="badge badge-warning">JavaScript</span>
                  <span className="badge badge-info">React</span>
                </div>
                <h5 className="card-title mt-2">Leonidas Esteban</h5>
                <p className="card-text">Vivamus quam mi, egestas eu metus id, mollis suscipit ipsum. In vel mollis mauris. Nunc id sem a lacus tincidunt pretium in in urna. Nam mi nisi, tincidunt ac tincidunt id, fermentum at metus.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img className="card-img-top" src={Project1} alt="Foto de Sacha" />
              <div className="card-body">
                <div className="badges">
                  <span className="badge badge-secondary">Negocios</span>
                  <span className="badge badge-danger">Startups</span>
                </div>
                <h5 className="card-title mt-2">Freddy Vega</h5>
                <p className="card-text">Vivamus quam mi, egestas eu metus id, mollis suscipit ipsum. In vel mollis mauris. Nunc id sem a lacus tincidunt pretium in in urna. Nam mi nisi, tincidunt ac tincidunt id, fermentum at metus.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img className="card-img-top" src={Project1} alt="Foto de Sacha" />
              <div className="card-body">
                <div className="badges">
                  <span className="badge badge-secondary">Negocios</span>
                  <span className="badge badge-danger">Startups</span>
                </div>
                <h5 className="card-title mt-2">Christian Van Der H.</h5>
                <p className="card-text">Vivamus quam mi, egestas eu metus id, mollis suscipit ipsum. In vel mollis mauris. Nunc id sem a lacus tincidunt pretium in in urna. Nam mi nisi, tincidunt ac tincidunt id, fermentum at metus.</p>
              </div>
            </div>
          </div>
        </div>          
        </div>
      </div>
    )
  }
}

export default Projects
