const inputFields = [
  { 
    inputClass: 'form-input',
    type: 'text',
    name: 'client_first_name', 
    id: 'client_first_name',
    placeholder: '',
    labelClass: 'form-label',
    labelHtmlFor: 'client_first_name',
    labelText: 'First Name',
  },
  { 
    inputClass: 'form-input',
    type: 'text',
    name: 'client_last_name', 
    id: 'client_last_name',
    placeholder: '',
    labelClass: 'form-label',
    labelHtmlFor: 'client_last_name',
    labelText: 'Last Name',
  },
  { 
    inputClass: 'form-input',
    type: 'email',
    name: 'client_email', 
    id: 'client_email',
    placeholder: '',
    labelClass: 'form-label',
    labelHtmlFor: 'client_email',
    labelText: 'Email',
  },
  { 
    inputClass: 'form-input',
    type: 'phone',
    name: 'client_phone', 
    id: 'client_phone',
    placeholder: '',
    labelClass: 'form-label',
    labelHtmlFor: 'client_phone',
    labelText: 'Phone',
  },
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