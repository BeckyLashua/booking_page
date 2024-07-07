const phoneRegex = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?(\d{1,4}[-.\s]?){2,4}$/;


const validPhoneNumbers = [
  '+123 456 789 0123',
  '+123-456-789-0123',
  '+123.456.789.0123',
  '1234567890',
  '(123) 456-7890',
  '123-456-7890',
  '123.456.7890'
];

const invalidPhoneNumbers = [
  '123',
  'abcd1234',
  '123-4567-89012',
  '+123 (456) 789-012345',
  '++1234567890',
  '123-456-7890-',
  '123.456.7890.',
  '456-7890'
];

console.log('valid nums: \n');
validPhoneNumbers.forEach(number => {
  console.log(number, ': ', phoneRegex.test(number));
});

console.log('invalid nums: \n');
invalidPhoneNumbers.forEach(number => {
  console.log(number, ': ', phoneRegex.test(number));
});
