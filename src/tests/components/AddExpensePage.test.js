import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(() => { // A jest global function, to run before each test module
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('test to render AddExpensePage correctly', () => {
  /* constants defined above in beforeEach() */
  // const onSubmit = jest.fn();
  // const history = { push: jest.fn() };
  // const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
  expect(wrapper).toMatchSnapshot();
});

test('test to handle onSubmit of AddExpensePage', () => {
  /* constants defined above in beforeEach() */
  // const onSubmit = jest.fn();
  // const history = { push: jest.fn() };
  // const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[3]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[3]);
})