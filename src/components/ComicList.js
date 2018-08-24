import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ComicListItem from './ComicListItem';
import SelectComics from '../selectors/getVisibleComics';

const ComicList = props => {
  const {
    comics
  } = props;

  return (
    <div>
      <h1>Comicbook List</h1>
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
