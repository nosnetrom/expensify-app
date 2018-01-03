import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('set to sort by amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('set to sort by date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount' // manually resetting, since this defaults to date
  }
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
})

test('testing to set text filter', () => {
  const myText = 'My text';
  const action = { 
    type: 'SET_TEXT_FILTER',
    text: myText
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(myText);
})

test('testing to setStartDate', () => {
  const myStartDate = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate: myStartDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(myStartDate);
});

test('testing to setEndDate', () => {
  const myEndDate = moment();
  const action = {
    type: 'SET_END_DATE',
    endDate: myEndDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(myEndDate);
})