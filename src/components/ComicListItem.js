import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ComicListItem = ({
  id, seriesName, seriesNumber, publicationDate, storyBy, artBy
}) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{seriesName}</h3>
      <span className="list-item__sub-title">Publication Date:</span>
      <span className="list-item__sub-title">Story By:</span>
      <span className="list-item__sub-title">Art By:</span>
    </div>
    <div className="list-item__right">
      <h3 className="list-item__data">{seriesNumber}</h3>
      <span className="list-item__sub-title">{moment(publicationDate).format('MMMM Do, YYYY')}</span>
      <span className="list-item__sub-title">{storyBy}</span>
      <span className="list-item__sub-title">{artBy}</span>    
    </div>
  </Link>
);

ComicListItem.propTypes = {
  id: PropTypes.string.isRequired,
  seriesName: PropTypes.string.isRequired,
  seriesNumber: PropTypes.number.isRequired,
  storyBy: PropTypes.string.isRequired,
  artBy: PropTypes.string.isRequired,
  publicationDate: PropTypes.number.isRequired
};

export default ComicListItem;
