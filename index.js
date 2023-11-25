const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const icecreamActions =
  require('./features/icecream/iceCreamSlice').icecreamActions;
const fetchUsers = require('./features/user/userSlice').fetchUsers;

console.log('initial State', store.getState());
const unsubscribe = store.subscribe(() => {
  console.log('State Update', store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.reStocked(3));

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.reStocked(2));

// unsubscribe();
