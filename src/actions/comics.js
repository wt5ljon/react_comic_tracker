import uuid from 'uuid';

export const addComic = (
  {
    seriesName = '',
    seriesNumber = undefined,
    storyBy = '',
    artBy = '',
    publicationDate = undefined,
    readStatus = false
  } = {}
) => {
  return {
    type: 'ADD_COMIC',
    comic: {
      id: uuid(),
      seriesName,
      seriesNumber,
      storyBy,
      artBy,
      publicationDate,
      readStatus
    }
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
