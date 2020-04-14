import React from 'react';
import Page from './containers/Page';
import { Route, Redirect } from 'react-router-dom';

import NavBar from './components/NavBar'
import WelcomePage from './components/WelcomePage'
import About from './components/About'

function App() {
 
  return (
    <div className="bg-fixed" >
      <NavBar />
      
      <Route exact path="/" component={() => <WelcomePage />} />
      <Route exact path="/questions" component={() => <Page />} />
      <Route exact path="/about" component={() => <About />} />
    </div>
  );
}

export default App;
