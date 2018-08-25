import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ComicListItem = ({
  id, seriesName, seriesNumber, publicationDate
}) => (
  <div>
    <Link to={`/edit/${id}`}><h2>{seriesName}</h2></Link>
    <h3>
      {'Series No.: '} 
      {seriesNumber}
    </h3>
    <h3>{publicationDate}</h3>
    <h1>----------------</h1>
  </div>
);

ComicListItem.propTypes = {
  id: PropTypes.string.isRequired,
  seriesName: PropTypes.string.isRequired,
  seriesNumber: PropTypes.number.isRequired,
  publicationDate: PropTypes.number.isRequired
};

export default ComicListItem;
