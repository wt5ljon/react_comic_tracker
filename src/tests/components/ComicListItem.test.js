import React from 'react';
import { shallow } from 'enzyme';
import ComicListItem from '../../components/ComicListItem';
import comics from '../fixtures/comics';

test('should render comic list item', () => {
  const wrapper = shallow(<ComicListItem {...comics[1]} />);
  expect(wrapper).toMatchSnapshot();
});