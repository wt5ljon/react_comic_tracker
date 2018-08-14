import React from 'react';
import { connect } from 'react-redux';
import { addComic } from '../actions/comics';
import ComicForm from './ComicForm';

const AddComicPage = (props) => (
  <div>
    <h2>Add Comic Page</h2>
    <ComicForm 
      onSubmit={(comic) => {
        props.dispatch(addComic(comic));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddComicPage);