import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Signup from '../ui/Signup';
import Links from '../ui/Links';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const history = createHistory();
const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

export const onAuthChange = (isAuthenticated) => {
  console.log('isAuthenticated', isAuthenticated);
  const pathname = history.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  if (isAuthenticated && isUnauthenticatedPage) {
    history.replace('/links');
  } else if (!isAuthenticated && isAuthenticatedPage) {
    history.replace('/');
  }
};

export const routes = (
  <Router history={history}>
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            (Meteor.userId() ? <Redirect to="/links" /> : <Login />)
          }
        />
        <Route
          exact
          path="/signup"
          render={() =>
            (Meteor.userId() ? <Redirect to="/links" /> : <Signup />)
          }
        />
        <Route
          exact
          path="/links"
          render={() => (!Meteor.userId() ? <Redirect to="/" /> : <Links />)}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
