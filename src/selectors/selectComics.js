import moment from 'moment';

export default (comics, { text, sortBy, startDate, endDate }) => {
  return comics.filter((comic) => {
    const publicationDateMoment = moment(comic.publicationDate);
    const startDateMatch = startDate ? startDate.isSameOrBefore(publicationDateMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(publicationDateMoment, 'day') : true;
    const textMatch = comic.seriesName.toLowerCase().includes(text.toLowerCase());

    return textMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return b.publicationDate < a.publicationDate ? 1 : -1;
    }
  });
};
