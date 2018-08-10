import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ComicTrackingApp from './Components/ComicTrackingApp';
import getVisibleComics from './selectors/getVisibleComics';
import { addComic, removeComic, editComic, toggleReadStatus } from './actions/comics';
import { setTextFilter, setStartDate, setEndDate } from './actions/filters';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleComics = getVisibleComics(state.comics, state.filters);
  console.log('Visible', visibleComics);
});

store.dispatch(addComic({ seriesName: 'Amazing Spider-man', seriesNumber: 10, publicationDate: 21000 }));
store.dispatch(addComic({ seriesName: 'The Avengers', seriesNumber: 18, publicationDate: -1000 }));
store.dispatch(setTextFilter('spider'));

setTimeout(() => {
  store.dispatch(setTextFilter('ng'));
}, 3000);

// store.dispatch(setTextFilter('aveng'));
// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(1250));
// store.dispatch(setTextFilter('Aveng'));


// const comic1 = {
//   seriesName: 'Amazing Spiderman',
// };

// store.dispatch(addComic(comic1));

// const comic2 = {
//   id: uuid(),
//   seriesName: 'The Avengers',
//   seriesNumber: 10,
//   storyBy: 'Stan Lee',
//   artBy: 'Steve Ditko',
//   publicationDate: 0,
//   readStatus: false
// };

// store.dispatch(addComic(comic2));

// store.dispatch(editComic(comic2.id, { seriesName: 'The Fantastic 4', seriesNumber: 12 }));

// store.dispatch(toggleReadStatus(comic2.id));

// store.dispatch(removeComic(comic1.id));

// store.dispatch(setTextFilter('spiderman'));

const jsx = (
  <Provider store={store}>
    <ComicTrackingApp />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));