const inputFields = [
  { 
    inputClass: 'form-input',
    type: 'email',
    name: 'email', 
    id: 'email',
    placeholder: '',
    labelClass: 'form-label',
    labelHtmlFor: 'email',
    labelText: 'Email',
  },
  { 
    inputClass: 'form-input',
    type: 'date',
    name: 'date', 
    id: 'date',
    placeholder: '',
    labelClass: 'form-label',
    labelHtmlFor: 'date',
    labelText: 'Date',
  },
  { 
    inputClass: 'time-input',
    type: 'time',
    name: 'time', 
    id: 'time',
    placeholder: '',
    labelClass: 'time-label',
    labelHtmlFor: 'time',
    labelText: 'Time',
  },
];

module.exports = {
  inputFields,
};