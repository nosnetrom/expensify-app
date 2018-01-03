import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('test a single ExpenseListItem', () => {
  const expense = expenses[3];
  const wrapper = shallow(<ExpenseListItem {...expense} />);
  expect(wrapper).toMatchSnapshot();
});