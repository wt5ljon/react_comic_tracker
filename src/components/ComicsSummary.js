import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import selectComics from '../selectors/selectComics';

const ComicsSummary = ({ comicCount }) => {
  const comicWord = comicCount === 1 ? 'comicbook' : 'comicbooks';

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          {'Viewing '}
          <span>{comicCount}</span>
          {` ${comicWord}`}
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Comic</Link>
        </div>
      </div>
    </div>
  );
};

ComicsSummary.propTypes = {
  comicCount: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  const visibleComics = selectComics(state.comics, state.filters);

  return {
    comicCount: visibleComics.length
  };
};

export default connect(mapStateToProps)(ComicsSummary);
