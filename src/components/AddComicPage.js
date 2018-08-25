import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import { startAddComic } from '../actions/comics';
import ComicForm from './ComicForm';

const AddComicPage = ({dispatch, history}) => (
  <div>
    <h2>Add Comic Page</h2>
    <ComicForm
      onSubmit={(comic) => {
        dispatch(startAddComic(comic));
        history.push('/');
      }}
      buttonText="Create"
    />
  </div>
);

AddComicPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired
};

export default connect()(AddComicPage);
