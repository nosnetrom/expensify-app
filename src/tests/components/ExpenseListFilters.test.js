import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import {filters, altFilters } from '../fixtures/filters';


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn(),
  sortByDate = jest.fn(),
  sortByAmount = jest.fn(),
  setStartDate = jest.fn(),
  setEndDate = jest.fn(),
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
});

test('test to render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('test to render alternate ExpenseListFilters correctly', () => {
  wrapper.setProps({ // an enzyme test function; pass in new props as object
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
})

test('test ExpenseListFilters to handle text change', () => {
  const value = 'e';
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('test ExpenseListFilters to sort by date', () => {
  const value = 'date';
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').at(0).simulate('change', {
    target: {value}
  });
  expect(sortByDate).toHaveBeenCalled(); // sortByDate takes no arguments
});

test('test ExpenseListFilters to sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').at(0).simulate('change', {
    target: {value}
  });
  expect(sortByAmount).toHaveBeenCalled(); // sortByAmount takes no arguments
});

test('test ExpenseListFilters to handle date changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');
  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('test ExpenseListFilters to handle date focus changes', () => {
  const calendarFocused = 'endDate'; // || 'startDate' || null
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});