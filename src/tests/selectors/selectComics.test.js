import moment from 'moment';
import selectComics from '../../selectors/selectComics';
import comics from '../fixtures/comics';

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectComics(comics, filters);
  expect(result).toEqual([comics[0], comics[2]]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0).add(2,'days'),
    endDate: undefined
  };
  const result = selectComics(comics, filters);
  expect(result).toEqual([comics[2]]);
});

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2,'days')
  };
  const result = selectComics(comics, filters);
  expect(result).toEqual([comics[1], comics[0]]);
});

test('should filter by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectComics(comics, filters);
  expect(result).toEqual([comics[1], comics[0], comics[2]]);
});
