import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ComicForm extends React.Component {
  static propTypes = {
    comic: PropTypes.shape({
      seriesName: PropTypes.string,
      seriesNumber: PropTypes.number,
      storyBy: PropTypes.string,
      artBy: PropTypes.string,
      publicationDate: PropTypes.number
    }),
    buttonText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    comic: {
      seriesName: '',
      seriesNumber: 0,
      storyBy: '',
      artBy: '',
      publicationDate: moment().valueOf()
    }
  };

  constructor(props) {
    super(props);
    const {comic} = this.props;
    this.state = {
      seriesName: comic.seriesName,
      seriesNumber: comic.seriesNumber,
      storyBy: comic.storyBy,
      artBy: comic.artBy,
      publicationDate: moment(comic.publicationDate),
      calendarFocused: false,
      errorMessage: ''
    };
  }

  onSeriesNameChange = (e) => {
    const seriesName = e.target.value;
    this.setState(() => ({ seriesName }));
  };

  onStoryByChange = (e) => {
    const storyBy = e.target.value;
    this.setState(() => ({ storyBy }));
  };

  onArtByChange = (e) => {
    const artBy = e.target.value;
    this.setState(() => ({ artBy }));
  };

  onSeriesNumberChange = (e) => {
    const seriesNumber = e.target.value;
    if (seriesNumber.match(/^\d*$/)) {
      this.setState(() => ({ seriesNumber }));
    }
  };

  onDateChange = (publicationDate) => {
    if (publicationDate) {
      this.setState(() => ({ publicationDate }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {seriesName, seriesNumber, publicationDate, storyBy, artBy} = this.state;
    const {onSubmit} = this.props;

    if (!seriesName || !seriesNumber) {
      this.setState(() => ({ errorMessage: 'Series name and number required' }));
    } else if (parseInt(seriesNumber, 10) === 0) {
      this.setState(() => ({ errorMessage: 'Series number must be greater than 0' }));
    } else {
      this.setState(() => ({ errorMessage: '' }));
      onSubmit({
        seriesName,
        seriesNumber: parseInt(seriesNumber, 10),
        publicationDate: publicationDate.valueOf(),
        storyBy,
        artBy
      })
    }
  };

  render() {
    const {seriesName, seriesNumber, publicationDate, storyBy, artBy, errorMessage, calendarFocused} = this.state;
    const {buttonText} = this.props;
    
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {errorMessage && <p>{errorMessage}</p>}
          <input 
            type="text" 
            placeholder="Series Name" 
            className="text-input"
            value={seriesName} 
            onChange={this.onSeriesNameChange}
          />
          <input 
            type="text" 
            placeholder="Series Number" 
            className="text-input"
            value={seriesNumber}
            onChange={this.onSeriesNumberChange}
          />
          <input 
            type="text" 
            placeholder="Story By"
            className="text-input"
            value={storyBy}
            onChange={this.onStoryByChange}
          />
          <input 
            type="text" 
            placeholder="Art By"
            className="text-input"
            value={artBy}
            onChange={this.onArtByChange}
          />
          <SingleDatePicker 
            date={publicationDate}
            onDateChange={this.onDateChange}
            focused={calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <button type="submit">{buttonText}</button>
        </form>
      </div>  
    )
  };
}
