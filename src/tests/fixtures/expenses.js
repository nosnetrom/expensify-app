import moment from 'moment';

export default [
  {
    id: 'a',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: moment(0).valueOf() // also, moment(n).subtract(x, 'days').valueOf()
  },
  {
    id: 'b',
    description: 'Groceries',
    note: '',
    amount: 5950,
    createdAt: moment(0).subtract(4, 'days').valueOf() // also, moment(n).add(x, 'days').valueOf()
  },
  {
    id: 'c',
    description: 'Gardening',
    note: '',
    amount: 1950,
    createdAt: moment(0).add(4, 'days').valueOf()
  },
  {
    id: 'd',
    description: 'Gastronomy',
    note: '',
    amount: 10000,
    createdAt: moment(0).add(8, 'days').valueOf()
  }
];
