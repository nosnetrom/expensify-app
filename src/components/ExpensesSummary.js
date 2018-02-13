import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  return (
    <div className="page-header">
      <p className="page-header__title">
        Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{numeral(expensesTotal / 100).format('$0,0.00')}</span>.
      </p>
      <div className="page-header__actions">
        <Link className="btn-blue" to="/create">Add Expense</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);
