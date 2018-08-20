import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import comicsReducer from '../reducers/comics';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

export default () => {
  const store = createStore(
    combineReducers({
      comics: comicsReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};
