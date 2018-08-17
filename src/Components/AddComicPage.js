import React from 'react';
import { connect } from 'react-redux';
import { startAddComic } from '../actions/comics';
import ComicForm from './ComicForm';

const AddComicPage = (props) => (
  <div>
    <h2>Add Comic Page</h2>
    <ComicForm 
      onSubmit={(comic) => {
        props.dispatch(startAddComic(comic));
        props.history.push("/");
      }}
      buttonText="Create"
    />
  </div>
);

export default connect()(AddComicPage);