import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SearchPage from './pages/Search';
import CityPage from './pages/City';

export default class App extends Component {
  render() {
    return(
      <div className="app">
        <div className="app__content">
          <Router>
            <Switch>
              <Route exact path="/" component={SearchPage} />
              <Route path="/:city" component={CityPage} />
            </Switch>          
          </Router>
        </div>
      </div>
    )
  }
}