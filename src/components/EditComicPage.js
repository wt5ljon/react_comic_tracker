import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import ComicForm from "./ComicForm";
import { startEditComic, startRemoveComic } from '../actions/comics';

const EditComicPage = ({ dispatch, history, match, comic}) => (
  <div>
    <ComicForm
      onSubmit={(editedComic) => {
        dispatch(startEditComic(match.params.id, editedComic));
        history.push('/');
      }}
      comic={comic}
      buttonText="Update"
    />
    <button
      onClick={() => {
        dispatch(startRemoveComic(match.params.id));
        history.push('/');
      }}
      type="button"
    >
      {'Remove'}
    </button>
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
