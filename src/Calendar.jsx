import React from 'react';
import moment from 'moment';
import DatePicker from 'material-ui/DatePicker';

const f = 'DD.MM.YYYY HH:mm:ss';

const Calendar = () => (
  <div>
    <h1>Calendar</h1>
    <DatePicker
      onChange={(n = null, date) => alert(moment(date).format(f))}
      floatingLabelText="Выберите дату!"
    />
  </div>
);

export default Calendar;
