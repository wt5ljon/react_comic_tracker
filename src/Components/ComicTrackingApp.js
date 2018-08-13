import React from 'react';
import Header from './Header';
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