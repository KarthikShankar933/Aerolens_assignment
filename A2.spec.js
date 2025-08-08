const { faker } = require('@faker-js/faker');

function generateStudentData() {
  const gender = faker.helpers.arrayElement(['Male', 'Female', 'Other']);
  const hobbyIndex = faker.datatype.number({ min: 1, max: 3 });

  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    gender,
    phone: faker.phone.number('1234567891'),
    dobYear: '2025',
    dobMonth: 'August',
    dobDay: '08',
    subjects: 'QA',
    hobbyIndex,
    picturePath: 'Pixtures/sample.jpg',
    address: faker.location.streetAddress(),
    state: 'NCR',
    city: 'Delhi'
  };}
