import { combineReducers } from "@reduxjs/toolkit";
const initialState = { counter: 0, toggleCount: true };

const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "toggle":
      return {
        counter: state.counter,
        toggleCount: !state.toggleCount,
      };
    default:
      return state;
  }
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1, toggleCount: state.toggleCount };
    case "decrement":
      return { counter: state.counter - 1, toggleCount: state.toggleCount };
    case "increase":
      return {
        counter: state.counter + action.amount,
        toggleCount: state.toggleCount,
      };
    case "setZero":
      return {
        counter: 0,
        toggleCount: state.toggleCount,
      };
    default:
      return state;
  }
};

const Reducers = combineReducers({
  toggleReducer,
  counterReducer,
});

export default Reducers;