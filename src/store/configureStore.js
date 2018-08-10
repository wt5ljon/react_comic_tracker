import { createStore, combineReducers } from 'redux';
import comicsReducer from '../reducers/comics';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      comics: comicsReducer,
      filters: filtersReducer
    })
  );
  return store;
};
