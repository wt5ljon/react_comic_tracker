import uuid from 'uuid';
import database from '../firebase/firebase';

export const addComic = (comic) => {
  return {
    type: 'ADD_COMIC',
    comic
  };
};

export const startAddComic = (comicData = {}) => {
  return (dispatch) => {
    const {
      seriesName = '',
      seriesNumber = undefined,
      storyBy = '',
      artBy = '',
      publicationDate = undefined,
      readStatus = false
    } = comicData;
  const comic = { seriesName, seriesNumber, storyBy, artBy, publicationDate, readStatus };
  database.ref('comics').push(comic).then((ref) => {
    dispatch(addComic({
      id: ref.key,
      ...comic
    }))
  })
  };
};

export const removeComic = (id) => ({
  type: 'REMOVE_COMIC',
  id
});

export const editComic = (id, editedComic) => ({
  type: 'EDIT_COMIC',
  id,
  editedComic
});

export const toggleReadStatus = (id) => ({
  type: 'TOGGLE_READ_STATUS',
  id  
});

export const setComics = (comics) => ({
  type: 'SET_COMICS',
  comics
});

export const startSetComics = () => {
  return (dispatch) => {
    return database.ref('comics')
      .once('value')
      .then((snapshot) => {
        const comics = [];
        snapshot.forEach((childSnapshot) => {
          comics.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setComics(comics));
      });
  };
};
