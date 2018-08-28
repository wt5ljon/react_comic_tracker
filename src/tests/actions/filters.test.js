import moment from 'moment';
import { setTextFilter, setStartDate, setEndDate } from '../../actions/filters';

test('should correctly set up setTextFilter action for supplied text', () => {
  const text = 'test string';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should correctly set up setTextFilter action with default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should correctly set up object for setStartDate action', () => {
  const action = setStartDate(moment(-1000));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(-1000)
  });
});

test('should correctly set up object for setEndDate action', () => {
  const action = setEndDate(moment(1000));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(1000)
  });
});