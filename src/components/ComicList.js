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
    <div>
      {comics.length === 0 && <h2>No Comicbooks to List</h2>}
      {comics.map(comic => (<ComicListItem key={comic.id} {...comic} />))}
    </div>)
};

ComicList.propTypes = {
  comics: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = state => ({
  comics: SelectComics(state.comics, state.filters)
});

export default connect(mapStateToProps)(ComicList);
