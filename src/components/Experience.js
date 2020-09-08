import React, { Component } from 'react'
import '../assets/styles/components/Experience.scss';

export class Experience extends Component {
  render() {
    return (
      <div id="experience" className="section">
        <div className="container mt-2 mb-2 section-inner">
            <div className="row">
              <div className="col mx-3 mb-3">
                <h2>Experience</h2>
              </div>
            </div>
          
            <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

            <div className="card">
                <div className="card-header" role="tab" id="headingOne1">
                <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1" className='text-decoration-none'>
                  <h5 className="mb-0">
                    FREELANCE (02/2020 - today)                     
                    <p>Frontend & Full Stack Javascript</p>
                  </h5>                     
                  </a>
                </div>

                <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                  <div className="card-body">
                  <p>•Write modern, performant, maintainable code for a diverse array of clients and projects.</p>
                  <p>•Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React, TypeScript, Nextjs, Boostrap, Sass, Nodejs and Vercel.</p>
                  <p>•Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" role="tab" id="headingOne1">
                <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1" className='text-decoration-none'>
                  <h5 className="mb-0">
                    SUPERMERCADOS PERUANOS S.A (07/2019 - 01/2020)                     
                    <p>Full Stack Javascript</p>
                  </h5>                     
                  </a>
                </div>

                <div id="collapseOne1" className="collapse" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                  <div className="card-body">
                  <p>•Configuration and administration in Sharepoint Online (Lists, Groups, Libraries).</p>
                  <p>•Consumption of services and APIS (Sharepoint REST Service).</p>
                  <p>•Development of workflows in Microsoft Power Automate.</p>
                  <p>•BackEnd Technologies: <strong>Node.js, API REST and Swagger.</strong></p>
                  <p>•FrontEnd Technologies: <strong>Javascript, Typescript, React.js.</strong></p>
                  <p>•Update of tasks in Azure DevOps Boards.</p>
                  <p>•Git, Azure DevOps Repo y GitHub.</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" role="tab" id="headingTwo2">
                  <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2" className='text-decoration-none'>
                    <h5 className="mb-0">
                      PETROPERÚ S.A (05/2018 - 12/2018)
                      <p>Analyst</p>
                    </h5>
                  </a>
                </div>
                <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
                  <div className="card-body">
                  <p>•Development of VBA solutions in Excel (macros) for the automation of data recording, budgeting, financial calculation and generation of reports.</p>
                  <p>•Development of Web System for recording, monitoring, updating and reporting of Corrective Measures requested by Control Agencies.</p>
                  <p><strong>Technologies: PHP, Laravel 5.6, Vue.js and MariaDB.</strong></p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" role="tab" id="headingThree3">
                  <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3" className='text-decoration-none'>
                    <h5 className="mb-0">
                      TEAMSOFT (04/2016 - 06/2017)
                      <p>Full Stack Developer</p>
                    </h5>
                  </a>
                </div>

                <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#accordionEx">
                  <div className="card-body">
                  <p>Assigned to the projects of América Móvil Perú S.A.C. - CLARO.</p>
                  <p>•Development of new features for the Administrative systems of the Company. </p>
                  <p>•Writing documentation and operating manuals.</p>
                  <p><strong>Technologies: Net Framework 3.5 – 4.0, C#, Visual Basic, Javascript, Jquery, MVC, PL/SQL – IDE: VS2010 y VS2012.</strong></p>
                  </div>
                </div>
             </div>

              <div className="card">
                <div className="card-header" role="tab" id="headingFour4">
                  <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseFour4" aria-expanded="false" aria-controls="collapseFour4" className='text-decoration-none'>
                    <h5 className="mb-0">
                      CLOUD INFORMATION SOLUTION (03/2015 - 02/2016)
                      <p>PL/SQL Developer</p>
                    </h5>
                  </a>
                </div>

                <div id="collapseFour4" className="collapse" role="tabpanel" aria-labelledby="headingFour4" data-parent="#accordionEx">
                  <div className="card-body">
                  <p>•Analyzing requirements and development of new features (INTRATEGO – CIS ERP)</p>
                  <p>•Modify existing software to correct errors, to upgrade interfaces and improve performance of customer requirements.</p>
                  <p><strong>Technologies: PL/SQL, Oracle 10g-11g, Oracle Forms, Designer and Oracle Reports Builder.</strong></p>
                  </div>
                </div>
                </div>

              <div className="card">
                <div className="card-header" role="tab" id="headingFive5">
                  <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseFive5" aria-expanded="false" aria-controls="collapseFive5" className='text-decoration-none'>
                    <h5 className="mb-0">
                      INTRATEGO SAC (07/2014 - 02/2015)
                      <p>PL/SQL Developer</p>
                    </h5>
                  </a>
                </div>

                <div id="collapseFive5" className="collapse" role="tabpanel" aria-labelledby="headingFive5" data-parent="#accordionEx">
                  <div className="card-body">
                  <p>•Modify existing software to correct errors, to upgrade interfaces and improve performance of customer requirements (INTRATEGO – CIS ERP).</p>
                  <p><strong>Technologies: PL/SQL, Oracle 10g-11g, Oracle Forms, Designer and Oracle Reports Builder.</strong></p>
                  </div>
                </div>

                </div>


              <div className="card">
                <div className="card-header" role="tab" id="headingSix6">
                  <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseSix6" aria-expanded="false" aria-controls="collapseSix6" className='text-decoration-none'>
                    <h5 className="mb-0">
                      3DEV BUSINESS & CONSULTING SAC (07/2013 - 02/2014).
                      <p>Full Stack Developer</p>
                    </h5>
                  </a>
                </div>

                <div id="collapseSix6" className="collapse" role="tabpanel" aria-labelledby="headingSix6" data-parent="#accordionEx">
                  <div className="card-body">
                  <p>•	Project: Authorization Formats System – Komatsu Mitsui</p>
                  <p>- Analyzing requirements and development features integrated in Sharepoint.</p>
                  <p>- Configuration and administration in Sharepoint Online (Lists, Groups, Libraries). </p>
                  <p>- Connecting forms(Infopath) deploy in Sharepoint with the database of the company.</p>
                  <p>- Writing documentation and operating manuals.</p>
                  <p><strong>Technologies: Sharepoint Designer, OnPremise 2010, 2013, Infopath, SQLServer 2008 R2</strong></p>

                  <p>•	Project: Web System for Monitoring and Audit Control – Komatsu Mitsui</p>
                  <p>- Analyzing requirements and development of new features.</p>
                  <p><strong>Technologies: Net Framework 3.5 – 4.0, C#, MVC, Javascript, Jquery, SQL Server 2008 R2</strong></p>
                  </div>
                </div>
                </div>

            </div>
            
        </div>
      </div>
    )
  }
}

export default Experience
