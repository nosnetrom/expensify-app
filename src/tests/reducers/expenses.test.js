import expenses from '../fixtures/expenses';
import moment from 'moment';
import expensesReducer from '../../reducers/expenses';

test('test to set default state of expensesReducer', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
})

test('test removeExpense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2], expenses[3]]);
});

test('test removeExpense where id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 'x'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('test addExpense', () => {
  const expense = {
    id: 'e',
    description: 'Excess',
    note: '',
    amount: 50000,
    createdAt: moment(0).add(6, 'days').valueOf()
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
})

test('test editExpense', () => {
  const amount = 295;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toEqual(amount);
})

test('test editExpense when id not found', () => {
  const amount = 295;
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'y',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});