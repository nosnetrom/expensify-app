import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('testing ExpensesSummary component, single expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={195} />);
  expect(wrapper).toMatchSnapshot();
});

test('testing ExpensesSummary component, multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={10} expensesTotal={123456789} />);
  expect(wrapper).toMatchSnapshot();
});

