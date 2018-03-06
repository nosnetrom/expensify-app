import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <span className="list-item__description">{description}</span><br />
      <span className="list-item__createdAt">{moment(createdAt).format('MMM DD YYYY')}</span>
    </div>
     <div className="list-item__amount">{numeral(amount / 100).format('$0,0.00')}</div>
  </Link>
)

export default ExpenseListItem;