import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import ComicForm from "./ComicForm";
import { startEditComic, startRemoveComic } from '../actions/comics';

const EditComicPage = ({ dispatch, history, match, comic}) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Edit Comicbook</h1>
      </div>    
    </div>
    <div className="content-container">
      <ComicForm
        onSubmit={(editedComic) => {
          dispatch(startEditComic(match.params.id, editedComic));
          history.push('/');
        }}
        comic={comic}
        buttonText="Update Comicbook"
      />
      <button
        className="button button--secondary"
        onClick={() => {
          dispatch(startRemoveComic(match.params.id));
          history.push('/');
        }}
        type="button"
      >
        {'Remove Comicbook'}
      </button>
    </div>
  </div>
);

EditComicPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
  comic: PropTypes.shape({
    seriesName: PropTypes.string,
      seriesNumber: PropTypes.number,
      storyBy: PropTypes.string,
      artBy: PropTypes.string,
      publicationDate: PropTypes.number
  }).isRequired
};

const mapStateToProps = (state, props) => ({
  comic: state.comics.find(comic => comic.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditComicPage);
