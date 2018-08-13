import React from 'react';

const EditComicPage = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Edit Comic with id = {props.match.params.id}</h2>
    </div>
  );
};

export default EditComicPage;