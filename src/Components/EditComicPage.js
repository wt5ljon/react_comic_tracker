import React from 'react';
import { connect } from 'react-redux';
import ComicForm from '../components/ComicForm';
import { editComic, removeComic } from '../actions/comics';

const EditComicPage = (props) => {
  return (
    <div>
      <h2>Edit Comic with id = {props.match.params.id}</h2>
      <ComicForm
        onSubmit={(comic) => {
          props.dispatch(editComic(props.match.params.id, comic));
          props.history.push("/");
        }} 
        comic={props.comic} 
      />
      <button onClick={() => {
          props.dispatch(removeComic(props.match.params.id));
          props.history.push("/");
        }}>
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    comic: state.comics.find((comic) => {
      return comic.id === props.match.params.id
    })
  };
};

export default connect(mapStateToProps)(EditComicPage);