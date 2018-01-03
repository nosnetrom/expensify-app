console.log('destructuring...');
// Object desturcturing:
/*
const person = {
  name: 'JMT',
  age: 39,
  location: {
    city: 'Dallas',
    temp: 55
  }
}

//const name = person.name;
//const age = person.age;
const {name = 'Joe Bloe', age} = person; // Equivalent to the above; setting a default val for name
console.log(`I am ${name}, ${age} years old.`)

const {city, temp: temperature} = person.location // temp is renamved
console.log(`Temperature in ${city} is ${temperature} degrees.`);


const book = {
  title: 'My Story',
  author: 'JMT',
  publisher: {
    name: 'Scribner'
  }
}
const {name: publisherName = 'Self-published'} = book.publisher;
console.log(publisherName);
*/

// Array destructuring...
const address = ['446 Hill Drive', 'Vista', 'CA', '92083'];

const [, city, state = 'TX'] = address; // Electing not to declare street, ZIP as vars
console.log(`You are in ${city} ${state}.`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName,,med] = item;
console.log(`A medium ${itemName} costs ${med}.`);
