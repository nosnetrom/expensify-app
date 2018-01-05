import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <p>
    <span className="ExpenseItem__description">
    <Link to={`/edit/${id}`}>{description}</Link>
    </span>
    <span className="ExpenseItem__amount">{amount}</span>
    <span className="ExpenseItem__createdAt">{moment(createdAt).format('MMM DD YYYY')}</span>
  </p>
)

export default ExpenseListItem;