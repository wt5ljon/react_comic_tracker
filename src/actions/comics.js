// import database from '../firebase/firebase';

export const addComic = comic => ({
  type: 'ADD_COMIC',
  comic
});

export const startAddComic = (comicData = {}) => (dispatch, getState) => {
  const { auth } = getState();
  const {
    seriesName = '',
    seriesNumber = undefined,
    storyBy = '',
    artBy = '',
    publicationDate = undefined
  } = comicData;
  const comic = { seriesName, seriesNumber, storyBy, artBy, publicationDate };
  database.ref(`users/${auth.uid}/comics`).push(comic).then((ref) => {
    dispatch(addComic({
      id: ref.key,
      ...comic
    }))
  })
};

export const removeComic = (id) => ({
  type: 'REMOVE_COMIC',
  id
});

export const startRemoveComic = (id) => (dispatch, getState) => {
  const { auth } = getState();
  return database.ref(`users/${auth.uid}/comics/${id}`).remove().then(() => {
    dispatch(removeComic(id));
  });
};

export const editComic = (id, editedComic) => ({
  type: 'EDIT_COMIC',
  id,
  editedComic
});

export const startEditComic = (id, editedComic) => (dispatch, getState) => {
  const { auth } = getState();
  return database.ref(`users/${auth.uid}/comics/${id}`).set(editedComic).then(() => {
    dispatch(editComic(id, editedComic));
  });
};

export const setComics = (comics) => ({
  type: 'SET_COMICS',
  comics
});

export const startSetComics = () => (dispatch, getState) => {
  const { auth } = getState();
  return database.ref(`users/${auth.uid}/comics`)
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
