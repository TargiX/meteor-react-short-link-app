import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Signup from '../imports/ui/Signup';
import Links from '../imports/ui/Links';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';

const customHistory = createBrowserHistory();

const routes = (
  <Router history={customHistory}>
    <div>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/links" component={Links} />
        <Route exact path="/" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
