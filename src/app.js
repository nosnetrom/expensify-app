
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css'; // An npm package
import 'react-dates/lib/css/_datepicker.css'; // for datepicker
import './styles/styles.scss';

const store = configureStore();

// store.dispatch() returns an object
store.dispatch(addExpense({ description: 'water bill', amount: 5000, createdAt: 1514236934654 }));
store.dispatch(addExpense({ description: 'rent', amount: 105000, createdAt: 1513256834654 }));
store.dispatch(addExpense({ description: 'gas bill', amount: 3500, createdAt: 1515246734654 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
