import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    // Dispatch the action
    this.props.editExpense(this.props.expense.id, expense);
    // Redirect to dashboard
    this.props.history.push('/');
  };
  onRemove = (event) => {
    this.props.removeExpense({id: this.props.expense.id});
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
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);