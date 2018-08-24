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
        } 
        return comic;
      });
    case 'SET_COMICS':
      return action.comics;
    default:
      return state;
  }
};

export default comicsReducer;
