import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => { // A jest global function, to run before each test module
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage 
    startEditExpense={startEditExpense} 
    startRemoveExpense={startRemoveExpense} 
    history={history}
    expense={expenses[0]} />);
});

test('test to render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

// test cases:
// test to render editExpense, test to edit expense (w/spies), test to remove (w/spies)
test('test EditExpensePage to correctly edit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('test to startRemoveExpense', () => {
  wrapper.find('button').last().simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: expenses[0].id
  })
})