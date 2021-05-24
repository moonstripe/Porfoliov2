import './App.css';
import React from 'react'
import { Title, Home, About, Projects, Background } from './components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// TODO: make this responsive to mobile

function App() {

  return (
    <Router>
      <div className={'container'}>

        <Background />

        <Title />

        <div className={'content'}>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
