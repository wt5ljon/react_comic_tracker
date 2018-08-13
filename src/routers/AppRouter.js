import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ComicTrackingApp from '../components/ComicTrackingApp';
import EditComicPage from '../components/EditComicPage';
import AddComicPage from '../components/AddComicPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header title="Comicbook Tracking App" />
      <Switch>
        <Route path="/" component={ComicTrackingApp} exact={true} />
        <Route path="/edit/:id" component={EditComicPage} />
        <Route path="/create" component={AddComicPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;