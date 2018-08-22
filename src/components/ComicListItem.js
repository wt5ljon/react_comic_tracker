import React from 'react';
import { Link } from 'react-router-dom';

const ComicListItem = ({ id, seriesName, seriesNumber, publicationDate }) => {  
  return (
    <div>
      <Link to={`/edit/${id}`}><h2>{seriesName}</h2></Link>
      <h3>{seriesNumber}</h3>
      <h3>{publicationDate}</h3>
      <h1>----------------</h1>
    </div>
  );
};

export default ComicListItem;
