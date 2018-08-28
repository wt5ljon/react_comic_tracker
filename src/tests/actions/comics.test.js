import { addComic, editComic, removeComic, setComics } from '../../actions/comics';

test('should setup remove comic action object', () => {
  const action = removeComic('123abc');
  expect(action).toEqual({
    type: 'REMOVE_COMIC',
    id: '123abc'
  });
});

test('should setup edit comic action object', () => {
  const editedComic = {
    seriesName: 'Amazing Spider-Man'
  }
  const action = editComic('123abc', editedComic);
  expect(action).toEqual({
    type: 'EDIT_COMIC',
    id: '123abc',
    editedComic
  });
});

test('should setup add comic action object', () => {
  const comic = {
    seriesName: 'Fantastic Four'
  }
  const action = addComic(comic);
  expect(action).toEqual({
    type: 'ADD_COMIC',
    comic
  });
});

test('should setup set comics action action', () => {
  const comics = ['Amazing Spider-Man', 'Fantastic Four'];
  const action = setComics(comics);
  expect(action).toEqual({
    type: 'SET_COMICS',
    comics
  });
});