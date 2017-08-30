import React from 'react';
import Footer from './Footer';
import moment from 'moment';
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/Calendar.css';
import { getEvents } from '../gcalendar';
import BigCalendar from 'react-big-calendar';

// a localizer for BigCalendar
BigCalendar.momentLocalizer(moment)

export default class Calendar extends React.Component {
    constructor () {
    super()
    this.state = {
      events: []
    }
  }
  componentDidMount () {
    getEvents((events) => {
      this.setState({events})
    })
  }

  render () {
    return (
      <div className="calendar">
        <h1>EVENTS CALENDAR</h1>
        <BigCalendar
          events={this.state.events}
          style={{height: '100%'}}
        />
        <Footer/>
      </div>
    )
  }
};
