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
    name: 'appt_time', 
    id: 'appt_time',
    placeholder: '',
    labelClass: 'time-label',
    labelHtmlFor: 'appt_time',
    labelText: 'Time',
  },
];

module.exports = {
  inputFields,
};