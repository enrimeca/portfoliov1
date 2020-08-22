import React from 'react'
 
import { BrowserRouter, Route } from 'react-router-dom'
 
import Layout from '../components/Layout'
import Home from '../src/pages/Home'
 
export default function App() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path='/home' component={home} />
          {/* <Route path='/items/new' component={ItemsNew} /> */}
        </Layout>
      </BrowserRouter>
    )
}
