import React, { Component, Fragment } from 'react'

import Header from '../components/Header';
import Features from '../components/features';
import About from '../components/about';
import Services from '../components/services';
import Gallery from '../components/gallery';
import Testimonials from '../components/testimonials';
import Team from '../components/Team';
import Contact from '../components/contact';
import JsonData from '../data/data.json';

export class Home extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    console.log('landingPageData :', this.state.landingPageData)
    return (
      <Fragment>
        <Header data={this.state.landingPageData.Header}/>
        <Features data={this.state.landingPageData.Features}/>
        <About  data={this.state.landingPageData.About}/>
        <Services  data={this.state.landingPageData.Services}/>
        <Gallery />
        <Testimonials  data={this.state.landingPageData.Testimonials}/>
        <Team  data={this.state.landingPageData.Team}/>
        <Contact  data={this.state.landingPageData.Contact}/>
      </Fragment>
    )
  }
}

export default Home
