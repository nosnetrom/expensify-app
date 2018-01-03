import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


//const date = new Date();
const now = moment();
console.log(now.format('MMM DD YYYY'));

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    }
  };
  onDescriptionChange = (event) => {
    const description = event.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (event) => {
    const note = event.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (event) => {
    const amount = event.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) { // regex for decimal expressions
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) { // not possible to delete a date from the field
      this.setState(() => ({ createdAt }));
    };
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (event) => {
    event.preventDefault();
    if (!this.state.description || !this.state.amount) {
      // set error state/message
      this.setState(() => ({error: 'Please provide a description and\/or amount!'}));
    } else {
      // clear the error and submit
      this.setState(() => {error: ''});
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text" // for entering decimal values
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => { false }}
          />
          <textarea
            placeholder="Optional note for this expense"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>
            Save expense
          </button>
        </form>
      </div>
    )
  }
};