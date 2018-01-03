import { createStore } from 'redux';

// Action generators: functions that return action objects
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});
const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})
// setCount
const setCount = ({countNumber} = {}) => ({
  type: 'SET',
  countNumber
});
// resetCount
const resetCount = () => ({
  type: "RESET"
});

// Reducers: 
// 1. Pure functions: output determined ONLY by input
// 2. Never change state or action 
const countReducer = (state = { count: 0 }, action) => { // Set the default state
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'SET': 
      return {
        count: action.countNumber
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    default:
      return state;
  };
}

const store = createStore(countReducer);

// The returned method from store.subscribe() 
// is unsubscribe; here, we make it a constant
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Increment the count
// store.dispatch(
//   {
//     type: 'INCREMENT',
//     incrementBy: 5 // Passing extra info in with the action
//   }
// );

store.dispatch(incrementCount({ incrementBy: 5 }));

//unsubscribe();

store.dispatch(incrementCount());
// Reset to 0
store.dispatch(resetCount());
store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({countNumber: 101}));



