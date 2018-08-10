const initialState = [];

const comicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMIC':
      return [
        ...state,
        action.comic
      ];
    case 'REMOVE_COMIC':
      return state.filter((comic) => comic.id !== action.id);
    case 'EDIT_COMIC':
      return state.map((comic) => {
        if (comic.id === action.id) {
          return {
            ...comic,
            ...action.editedComic
          };
        } else {
          return comic;
        }
      });
    case 'TOGGLE_READ_STATUS':
    return state.map((comic) => {
      if (comic.id === action.id) {
        return {
          ...comic,
          readStatus: !comic.readStatus
        };
      } else {
        return comic;
      }
    });
    default:
      return state;
  };
};

export default comicsReducer;