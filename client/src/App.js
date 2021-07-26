import React from 'react'
import Home from './pages/Home'
import Cocktails from './pages/Cocktails'
import About from './pages/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/cocktails">
              <Cocktails/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
