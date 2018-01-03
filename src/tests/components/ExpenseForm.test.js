import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import expenses from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';

test('test to render default ExpenseForm', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('test ExpenseForm with sample data', () => {
  const expense = expenses[3];
  const wrapper = shallow(<ExpenseForm expense={expense} />);
  expect(wrapper).toMatchSnapshot();
});

test('test to render error on invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot(); // check the pre-submitted state
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {} // must pass preventDefault in lieu of actual click event
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot(); // check for error after submitting
});

test('test to set description on change', () => {
  const value = 'My description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', { // find 0-index input, pass an object for change
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
});

test('test to set note on change', () => {
  const value = 'My note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').at(0).simulate('change', { // find 0-index input, pass an object for change
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value);
});

test('test for valid amount', () => {
  const value = '23.50';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('amount')).toBe(value);
});

test('test for invalid amount', () => {
  const value = '12.222';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('amount')).toBe('');
});

test('test onSubmit for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {} // must pass preventDefault in lieu of actual click event
  });
  expect(wrapper.state('error')).toBe(''); // clear any existing errors
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});

test('test to set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />); // no need to pass data in
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('test to set calendar focus on change', () => {
  const focused = true; // must use same variable name as created in the onFocusChange
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});