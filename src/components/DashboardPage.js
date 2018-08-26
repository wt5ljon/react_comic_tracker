import React from 'react';
import ComicList from './ComicList';
import ComicsListFilters from './ComicsListFilters';
import ComicsSummary from './ComicsSummary';

const ComicTrackingApp = () => (
  <div>
    <ComicsSummary />
    <ComicsListFilters />
    <ComicList />
  </div>
);

export default ComicTrackingApp;
