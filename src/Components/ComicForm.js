import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class ComicForm extends React.Component {
  state = {
    seriesName: '',
    seriesNumber: '',
    storyBy: '',
    artBy: '',
    publicationDate: moment(),
    calendarFocused: false
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
    this.setState(() => ({ publicationDate }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  render() {
    return (
      <div>
        <form>
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
          <SingleDatePicker 
            date={this.state.publicationDate}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <button>Add Comicbook</button>
        </form>
      </div>  
    )
  };
}