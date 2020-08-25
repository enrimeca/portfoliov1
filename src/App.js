import React from 'react'
// import '../assets/styles/App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
import Layout from '../src/components/Layout'
import Home from '../src/pages/Home'
import NotFound from '../src/pages/NotFound'
 
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch> 
          <Route exact path="/" component = { Home } />
          <Route component = {NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
 
export default App