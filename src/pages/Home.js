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
        <About  data={this.state.landingPageData.About}/>
      </Fragment>
    )
  }
}

export default Home
