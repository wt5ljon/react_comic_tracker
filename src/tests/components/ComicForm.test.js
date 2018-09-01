import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import ComicForm from '../../components/ComicForm';
import comics from '../fixtures/comics';

test('should render ComicForm correctly', () => {
  const wrapper = shallow(<ComicForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ComicForm correctly with comic data', () => {
  const wrapper = shallow(<ComicForm comic={comics[2]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ComicForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('errorMessage').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set seriesName on input change', () => {
  const value = 'New series name';
  const wrapper = shallow(<ComicForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('seriesName')).toBe(value);
});

test('should set seriesNumber on input change', () => {
  const value = '10';
  const wrapper = shallow(<ComicForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('seriesNumber')).toBe(value);
});

test('should not set seriesNumber on invalid input change', () => {
  const value = 'Z';
  const wrapper = shallow(<ComicForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('seriesNumber')).toBe(0);
});

test('should set storyBy on input change', () => {
  const value = 'New storyBy name';
  const wrapper = shallow(<ComicForm />);
  wrapper.find('input').at(2).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('storyBy')).toBe(value);
});

test('should set artBy on input change', () => {
  const value = 'New artBy name';
  const wrapper = shallow(<ComicForm />);
  wrapper.find('input').at(3).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('artBy')).toBe(value);
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ComicForm comic={comics[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('errorMessage')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    seriesName: comics[0].seriesName,
    seriesNumber: comics[0].seriesNumber,
    publicationDate: comics[0].publicationDate,
    storyBy: comics[0].storyBy,
    artBy: comics[0].artBy
  });
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ComicForm />);
  // console.log(wrapper.find(SingleDatePicker).length);
  wrapper.find(SingleDatePicker).prop('onDateChange')(now);
  expect(wrapper.state('publicationDate')).toEqual(now);
});

test('should set calendar focus on change', () => {
  const focused = true;
  const wrapper = shallow(<ComicForm />);
  wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});