import React from 'react';
import ComicList from './ComicList';
import ComicsListFilters from './ComicsListFilters';

const ComicTrackingApp = () => {
  return (
    <div>
      <ComicsListFilters />
      <ComicList />
    </div>
  );
};

export default ComicTrackingApp;