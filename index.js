const store = require('./app/store.js');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;

console.log('initial State', store.getState());
const unsubscribe = store.subscribe(() => {
  console.log('Updated Store', store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.reStocked(3));

unsubscribe();
