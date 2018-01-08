import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <p>
    <span className="ExpenseItem__description">
    <Link to={`/edit/${id}`}>{description}</Link>
    </span>
    <span className="ExpenseItem__amount">{numeral(amount / 100).format('$0,0.00')}</span>
    <span className="ExpenseItem__createdAt">{moment(createdAt).format('MMM DD YYYY')}</span>
  </p>
)

export default ExpenseListItem;