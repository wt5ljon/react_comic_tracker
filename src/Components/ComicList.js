import React from 'react';
import { connect } from 'react-redux';
import ComicListItem from './ComicListItem';
import SelectComics from '../selectors/getVisibleComics';

const ComicList = (props) => (
  <div>
    <h1>Comicbook List</h1>
    {props.comics.length === 0 && <h2>No Comicbooks to List</h2>}
    {props.comics.map((comic) => (<ComicListItem key={comic.id} {...comic} />))}
  </div>
);

const mapStateToProps = (state) => ({
  comics: SelectComics(state.comics, state.filters)
});

export default connect(mapStateToProps)(ComicList);
