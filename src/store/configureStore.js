import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import comicsReducer from '../reducers/comics';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      comics: comicsReducer,
      filters: filtersReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};
