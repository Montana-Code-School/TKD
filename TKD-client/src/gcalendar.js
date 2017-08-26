import request from 'superagent'
import moment from 'moment';

const CALENDAR_ID = 'ts2843ctr62bhl6mv806ur1k6c@group.calendar.google.com'

const API_KEY = 'AIzaSyAOuDzSlG24RPBn3OKVAyjW3OK_EJhCUbp'

let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          let sTime = event.start.date || event.start.dateTime;
          let eTime = event.end.date || event.end.dateTime;
          let csTime = moment(sTime).toDate();
          let ceTime = moment(eTime).toDate();

          return events.push({
            start: csTime,
            end: ceTime,
            title: event.summary,
            description: event.description,
            location: event.location
          })
        })
        callback(events);
      }
    })
}
