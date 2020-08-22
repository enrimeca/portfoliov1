import React, { Component } from 'react'
import $ from 'jquery';

import Header from '../components/Header';
import Features from '../components/features';
import About from '../components/about';
import Services from '../components/services';
import Gallery from '../components/gallery';
import Testimonials from '../components/testimonials';
import Team from '../components/Team';
import Contact from '../components/contact';


export class Home extends Component {
  state = {
    resumeData : {},
  }
  getResumeData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <Fragment>
        <Header data={this.state.resumeData.Header}/>
        <Features data={this.state.resumeData.Features}/>
        <About  data={this.state.resumeData.About}/>
        <Services  data={this.state.resumeData.Services}/>
        <Gallery />
        <Testimonials  data={this.state.resumeData.Testimonials}/>
        <Team  data={this.state.resumeData.Team}/>
        <Contact  data={this.state.resumeData.Contact}/>
      </Fragment>
    )
  }
}

export default Home
