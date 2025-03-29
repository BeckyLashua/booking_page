const inputFields = [
  { 
    inputClass: 'form-input',
    type: 'date',
    name: 'appt_date', 
    id: 'appt_date',
    placeholder: '',
    labelClass: 'form-label',
    labelHtmlFor: 'appt_date',
    labelText: 'Date',
  },
  { 
    inputClass: 'time-input',
    type: 'time',
    name: 'start_time', 
    id: 'start_time',
    placeholder: '',
    labelClass: 'time-label',
    labelHtmlFor: 'start_time',
    labelText: 'Time',
  },
];

module.exports = {
  inputFields,
};