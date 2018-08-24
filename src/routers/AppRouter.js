import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import ComicTrackingApp from '../components/ComicTrackingApp';
import EditComicPage from '../components/EditComicPage';
import AddComicPage from '../components/AddComicPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={ComicTrackingApp} />
        <PrivateRoute path="/edit/:id" component={EditComicPage} />
        <PrivateRoute path="/create" component={AddComicPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
