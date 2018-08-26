import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import { startAddComic } from '../actions/comics';
import ComicForm from './ComicForm';

const AddComicPage = ({dispatch, history}) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Add Comicbook</h1>
      </div>    
    </div>
    <div className="content-container">
      <ComicForm
        onSubmit={(comic) => {
          dispatch(startAddComic(comic));
          history.push('/');
        }}
        buttonText="Save Comicbook"
      />    
    </div>
  </div>
);

AddComicPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired
};

export default connect()(AddComicPage);
