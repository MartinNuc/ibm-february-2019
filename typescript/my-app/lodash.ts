import lodash from 'lodash';

const people = [
  {
      id: 1,
      name: 'Peter'
  },
  {
      id: 2,
      name: 'Rachel'
  },
  {
      id: 3,
      name: 'John'
  },
  {
      id: 4,
      name: 'Tim'
  },
  {
      id: 5,
      name: 'Zed'
  }
];

let foundItem = lodash.find(people, (item) => item.id === 3);
// another way found in documentation:
// let tim = lodash.find(people, {id: 4});
console.log(foundItem);
// {
//   id: 4,
//   name: 'Tim'
// },
