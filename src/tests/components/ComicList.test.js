import React from 'react';
import { shallow } from 'enzyme';
import { UComicList } from '../../components/ComicList';
import comics from '../fixtures/comics';

test('should render comic list with comicss', () => {
  const wrapper = shallow(<UComicList comics={comics} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render comic list displaying empty message', () => {
  const wrapper = shallow(<UComicList comics={[]} />);
  expect(wrapper).toMatchSnapshot();
});