import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should set up removeExpense action object', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({ // use .toEqual() on objects and arrays
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('testing editExpense action', () => {
  const action = editExpense('123abc', {amount: 49500, description: 'My description'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      amount: 49500,
      description: 'My description'
    }
  });
});

test('should set up addExpense action object--values provided', () => {
  const action = addExpense(expenses[3]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[3]
  });
});

test('should add expense to db and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 1995,
    note: 'Just a mouse',
    createdAt: 1515615034413
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions(); // returns an array
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value') // returning a promise, to be passed to the next then()
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });   
});

test('should add expense with default values to db and store', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  store.dispatch(startAddExpense({})).then(() => { // pass in empty object for default vals
    const actions = store.getActions(); // returns an array
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);
    done();
  });     
}); 


// test('should set up addExpense action object--use default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       amount: 0,
//       createdAt: 0,
//       note: ''
//     }
//   });
// });