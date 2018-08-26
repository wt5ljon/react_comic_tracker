import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ComicListItem from './ComicListItem';
import SelectComics from '../selectors/selectComics';

const ComicList = props => {
  const {
    comics
  } = props;

  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Titles</div>
        <div className="show-for-desktop">Title</div>
        <div className="show-for-desktop">Number</div>
      </div>
      <div className="list-body">
        {
          comics.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No Comicbooks</span>
            </div>
          ) : (
            comics.map(comic => (<ComicListItem key={comic.id} {...comic} />))
          )
        }
      </div>
    </div>
    )
};

ComicList.propTypes = {
  comics: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = state => ({
  comics: SelectComics(state.comics, state.filters)
});

export default connect(mapStateToProps)(ComicList);
