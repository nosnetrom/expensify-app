import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = (event) => {
    this.props.setTextFilter(event.target.value); // like store.dispatch()
  };
  onSortChange = (event) => {
    event.target.value === 'amount' ?
      this.props.sortByAmount() :
      this.props.sortByDate();
  };
  render() {
    return (
      <div className="filters-container content-container">
        <div>
          <input type="text" 
            className="ExpenseList__filters text-input"
            value={this.props.filters.text}
            onChange={this.onTextChange}
            placeholder="Filter by text"
          />
        </div>
        <div>
          <label htmlFor="selectSortBy"> Sort by: </label>
            <select 
              name="selectSortBy"
              className="select-input"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}>
                <option 
                  value="date"
                >Date</option>
                <option 
                  value="amount"
                >Amount</option>
            </select>
        </div>
        <div>
          <DateRangePicker 
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={this.state.calendarFocused}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};
const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);