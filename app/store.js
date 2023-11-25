const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeSlice.js');

const store = configureStore({
  reducer: cakeReducer,
});

module.exports = store;
