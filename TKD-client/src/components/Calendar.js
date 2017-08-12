import React from 'react';
import Header from './Header';
import Footer from './Footer.js';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/Calendar.css';
import {getEvents, calendarUrls} from '../gcalendar';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class App extends React.Component {
  constructor() {
    super();

    this.storedFilters = window.localStorage.getItem('filters');

    if (this.storedFilters) {
      this.parsedFilters = JSON.parse(this.storedFilters);
    }

    this.state = {
      filters: this.parsedFilters || calendarUrls.map(cal => cal.category),
      events: []
    }

    this.isFiltered = (ev) => this.state.filters.includes(ev.category);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
  }

  onCheckboxChange(e) {
    const filters = this.state.filters;
    let index;

    if (e) {
      if (e.target.checked) {
        filters.push(e.target.value);
      } else {
        index = filters.indexOf(e.target.value);
        if (index !== -1) {
          filters.splice(index, 1);
        }
      }
    }

    window.localStorage.setItem('filters', JSON.stringify(filters));
    this.setState({filters: filters});

    getEvents((events) => {
      let filteredEvents = events.filter(this.isFiltered);
      this.setState({events: filteredEvents});
    });
  }

  componentDidMount() {
    this.onCheckboxChange();
  }

  eventColor(event, start, end, isSelected) {
    return {className: `rbc-event_${event.category}`}
  }

  get checkboxes() {
    return calendarUrls.map(cal => {
      const checked = this.isFiltered(cal);
      return (
        <div className={`checkboxGroup checkboxGroup_${cal.category}`} key={cal.url}>
          <input id={cal.category} type="checkbox" value={cal.category} onChange={this.onCheckboxChange} checked={checked}/>
          <label htmlFor={cal.category}>
            {cal.category}
          </label>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <form className="checkboxForm">
          {this.checkboxes}
        </form>
        <div className="calendar">
          {/* Navbar */}
          <Header/> {/*Title image and text*/}
          <h1>EVENTS CALENDAR</h1>
          {/*body*/}
          <BigCalendar popup selectable events={this.state.events} eventPropGetter={this.eventColor} onSelectEvent={event => console.log(event.title)} views={['month', 'week', 'day']}/> {/*Footer*/}
          <Footer/>
        </div>
      </div>
    )
  }
};

export default App;
