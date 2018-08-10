import React from 'react';
import { removeComic } from '../actions/comics';
import { connect } from 'react-redux';



const ComicListItem = ({ dispatch, id, seriesName, seriesNumber, publicationDate }) => {  
  
  const handleRemoveComic = () => {
    dispatch(removeComic(id));
  };

  return (
    <div>
      <h2>{seriesName}</h2>
      <h3>{seriesNumber}</h3>
      <h3>{publicationDate}</h3>
      <button onClick={handleRemoveComic}>Remove Comic</button>
      <h1>----------------</h1>
    </div>
  );
};

export default connect()(ComicListItem);
