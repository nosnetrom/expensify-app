import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-heading">
      <div className="showForMobile">Expense</div>
      <div className="showNonMobile">Expense</div>
      <div className="showNonMobile">Amount</div>
    </div>
    <div className="list-body">
      {
        props.expenses.length === 0 ? (
          <p>There are no recorded expenses.</p>
        ) : (
          props.expenses.map((expense, key) => {
            return <ExpenseListItem key={expense.id} {...expense} />
          })
        )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
