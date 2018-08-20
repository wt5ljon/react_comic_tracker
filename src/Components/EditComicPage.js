import React from 'react';
import { connect } from 'react-redux';
import ComicForm from '../components/ComicForm';
import { startEditComic, startRemoveComic } from '../actions/comics';

const EditComicPage = (props) => {
  return (
    <div>
      <ComicForm
        onSubmit={(comic) => {
          props.dispatch(startEditComic(props.match.params.id, comic));
          props.history.push("/");
        }} 
        comic={props.comic}
        buttonText="Update" 
      />
      <button onClick={() => {
          props.dispatch(startRemoveComic(props.match.params.id));
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