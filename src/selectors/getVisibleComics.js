export default (comics, { text, sortBy, startDate, endDate }) => {
  return comics.filter((comic) => {
    const textMatch = comic.seriesName.toLowerCase().includes(text.toLowerCase());
    const startDateMatch = typeof startDate !== 'number' || comic.publicationDate >= startDate;
    const endDateMatch = typeof endDate !== 'number' || comic.publicationDate <= endDate;
    
    return textMatch && startDateMatch && endDateMatch;
  });
};
