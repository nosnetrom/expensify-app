import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    // Dispatch the action
    this.props.startEditExpense(this.props.expense.id, expense);
    // Redirect to dashboard
    this.props.history.push('/');
  };
  onRemove = (event) => {
    this.props.startRemoveExpense({id: this.props.expense.id});
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
      <ExpenseForm 
        expense={this.props.expense}
        onSubmit={this.onSubmit}
      />
      <button
        className="ExpenseItem__btnRemove"
        onClick={this.onRemove}
      >
        Remove expense
      </button>
    </div>
    );
  };
};

/*const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense) => {
          // Dispatch the action
          props.dispatch(editExpense(props.expense.id, expense));
          // Redirect to dashboard
          props.history.push('/');
          console.log('updated', expense);
        }}
      />
      <button
        className="ExpenseItem__btnRemove"
        onClick={(event) => {
          props.dispatch(removeExpense({id: props.expense.id}));
          props.history.push('/');
        }}
      >
        Remove expense
      </button>
    </div>
  )
};*/

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};
const mapDispatchToProps = (dispatch, props) => ({ 
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);