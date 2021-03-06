import { combineReducers } from "redux";
// import types from "./contacts-types";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contacts-actions";

/*Redux Tookit*/

const items = createReducer([], {
  [contactsActions.addContact]: (state, { payload }) => [...state, payload],
  [contactsActions.deleteFromContacts]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, { payload }) => payload,
});

/*Redux*/

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
