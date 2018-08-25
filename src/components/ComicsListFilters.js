import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTextFilter } from '../actions/filters';

const ComicsListFilters = ({dispatch, filters}) => (
  <div>
    <input
      type="text"
      value={filters.text}
      onChange={(e) => {
        dispatch(setTextFilter(e.target.value));
      }}
    />
  </div>
);

ComicsListFilters.propTypes = {
  dispatch: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ComicsListFilters);
