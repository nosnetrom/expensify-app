import moment from 'moment';
import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters';

test('should generate setStartDate action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate setEndDate action object', () => {
  const futureDate = 1000 * 60 * 60 * 24 * 365 * 48;
  const action = setEndDate(moment(futureDate));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(futureDate)
  })
});

test('should generate sortByDate action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should generate sortByAmount action object', () => {
  expect(sortByAmount()).toEqual({  // alternative syntax
    type: 'SORT_BY_AMOUNT'
  });
});

test('should generate setTextFilter action object--value provided', () => {
  const textValue = 'foo'; // value is a variable; best practice
  const action = setTextFilter(textValue);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER', 
    text: textValue
  })
});

test('should generate setTextFilter action object--use default value', () => {
  const action = setTextFilter('');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER', 
    text: ''
  })
});