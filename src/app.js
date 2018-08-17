import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import getVisibleComics from './selectors/getVisibleComics';
import './firebase/firebase';
import { startSetComics } from './actions/comics';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleComics = getVisibleComics(state.comics, state.filters);
  console.log('Visible', visibleComics);
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetComics())
  .then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
  });
