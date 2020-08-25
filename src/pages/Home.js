import React, { Component, Fragment } from 'react'

import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
// import JsonData from '../data/data.json';

export class Home extends Component {
  // state = {
  //   landingPageData: {},
  // }
  // getlandingPageData() {
  //   this.setState({landingPageData : JsonData})
  // }

  // componentDidMount() {
  //   this.getlandingPageData();
  // }

  render() {
    // console.log('landingPageData :', this.state.landingPageData)
    return (
      <Fragment>
        <Header />        
        <About />
        <Experience />
        <Projects />
        <Footer />
      </Fragment>
    )
  }
}

export default Home
