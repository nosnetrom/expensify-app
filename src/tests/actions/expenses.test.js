import {addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
  const expenseData = {
    description: 'My description',
    amount: 4950,
    note: 'This is supposed to be a long note',
    createdAt: 159000000
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String) // .any(Constructor) will match any value of constructor type returned
    }
  });
});

test('should set up addExpense action object--use default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note: ''
    }
  });
});