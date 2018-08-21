import uuid from 'uuid';
import database from '../firebase/firebase';

export const addComic = (comic) => {
  return {
    type: 'ADD_COMIC',
    comic
  };
};

export const startAddComic = (comicData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      seriesName = '',
      seriesNumber = undefined,
      storyBy = '',
      artBy = '',
      publicationDate = undefined,
      readStatus = false
    } = comicData;
  const comic = { seriesName, seriesNumber, storyBy, artBy, publicationDate, readStatus };
  database.ref(`users/${uid}/comics`).push(comic).then((ref) => {
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

export const startRemoveComic = (id) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/comics/${id}`).remove().then(() => {
      dispatch(removeComic(id));
    });
  };
};

export const editComic = (id, editedComic) => ({
  type: 'EDIT_COMIC',
  id,
  editedComic
});

export const startEditComic = (id, editedComic) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/comics/${id}`).set(editedComic).then(() => {
      dispatch(editComic(id, editedComic));
    });
  };
};

export const toggleReadStatus = (id) => ({
  type: 'TOGGLE_READ_STATUS',
  id  
});

export const setComics = (comics) => ({
  type: 'SET_COMICS',
  comics
});

export const startSetComics = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/comics`)
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
