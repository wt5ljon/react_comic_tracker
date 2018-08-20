import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import ComicTrackingApp from '../components/ComicTrackingApp';
import EditComicPage from '../components/EditComicPage';
import AddComicPage from '../components/AddComicPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ComicTrackingApp} />
        <PrivateRoute path="/edit/:id" component={EditComicPage} />
        <PrivateRoute path="/create" component={AddComicPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;