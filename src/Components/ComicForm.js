import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class ComicForm extends React.Component {
  state = {
    seriesName: this.props.comic ? this.props.comic.seriesName : '',
    seriesNumber: this.props.comic ? this.props.comic.seriesNumber : '',
    storyBy: this.props.comic ? this.props.comic.storyBy : '',
    artBy: this.props.comic ? this.props.comic.artBy : '',
    publicationDate: this.props.comic ? moment(this.props.comic.publicationDate) : moment(),
    calendarFocused: false,
    errorMessage: ''
  };

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

    if (!this.state.seriesName || !this.state.seriesNumber) {
      this.setState(() => ({ errorMessage: 'Series name and number required' }));
    } else {
      this.setState(() => ({ errorMessage: '' }));
      this.props.onSubmit({
        seriesName: this.state.seriesName,
        seriesNumber: this.state.seriesNumber,
        publicationDate: this.state.publicationDate.valueOf(),
        storyBy: this.state.storyBy,
        artBy: this.state.artBy
      })
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
          <p><input 
            type="text" 
            placeholder="Series Name" 
            autoFocus 
            value={this.state.seriesName} 
            onChange={this.onSeriesNameChange}
          /></p>
          <p><input 
            type="text" 
            placeholder="Series Number" 
            value={this.state.seriesNumber}
            onChange={this.onSeriesNumberChange}
          /></p>
          <p><input 
            type="text" 
            placeholder="Story By"
            value={this.state.storyBy}
            onChange={this.onStoryByChange}
          /></p>
          <p><input 
            type="text" 
            placeholder="Art By"
            value={this.state.artBy}
            onChange={this.onArtByChange}
          /></p>
          <button>{this.props.buttonText}</button>
          <SingleDatePicker 
            date={this.state.publicationDate}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </form>
      </div>  
    )
  };
}