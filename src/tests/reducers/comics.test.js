import comicsReducer from '../../reducers/comics';
import comics from '../fixtures/comics';

test('should set default state', () => {
  const state = comicsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove comic if id found', () => {
  const action = {
    type: 'REMOVE_COMIC',
    id: comics[1].id
  };
  const state = comicsReducer(comics, action);
  expect(state).toEqual([comics[0], comics[2]]);
});

test('should not remove comic if id not found', () => {
  const action = {
    type: 'REMOVE_COMIC',
    id: '10'
  };
  const state = comicsReducer(comics, action);
  expect(state).toEqual(comics);
});


test('should edit a comic if id found', () => {
  const editedComic = {
    ...comics[0],
    seriesName: 'SGT. FURY',
    seriesNumber: 10
  };
  const action = {
    type: 'EDIT_COMIC',
    id: comics[0].id,
    editedComic
  };
  const state = comicsReducer(comics, action);
  expect(state).toEqual([editedComic, comics[1], comics[2]]);
});

test('should not edit a comic if id notfound', () => {
  const editedComic = {
    ...comics[0],
    seriesName: 'SGT. FURY',
    seriesNumber: 10
  };
  const action = {
    type: 'EDIT_COMIC',
    id: '-1',
    editedComic
  };
  const state = comicsReducer(comics, action);
  expect(state).toEqual(comics);
});

test('should return all comics provided in action', () => {
  const action = {
    type: 'SET_COMICS',
    comics
  };
  const state = comicsReducer(undefined, action);
  expect(state).toEqual(comics);
});

test('should add a new comic', () => {
  const comic = {
    id: '4', 
    seriesName: 'New Comic',
    seriesNumber: 99,
    publicationDate: 1000,
    storyBy: 'Olson',
    artBy: 'Haley'
  };
  const action = {
    type: 'ADD_COMIC',
    comic
  };
  const state = comicsReducer(comics, action);
  expect(state).toEqual([...comics, comic]);
});