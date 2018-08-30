import moment from 'moment';

export default [{
  id: '1',
  seriesName: 'Amazing Spider-Man',
  seriesNumber: 2,
  publicationDate: moment(0).valueOf(),
  storyBy: 'Lee',
  artBy: 'Ditko'
}, {
  id: '2',
  seriesName: 'Fantastic Four',
  seriesNumber: 13,
  publicationDate: moment(0).subtract(4,'days').valueOf(),
  storyBy: 'Lee',
  artBy: 'Ditko'
}, {
  id: '3',
  seriesName: 'The Avengers',
  seriesNumber: 99,
  publicationDate: moment(0).add(4,'days').valueOf(),
  storyBy: 'Lee',
  artBy: 'Ditko'
}];
