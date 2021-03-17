import { combineReducers } from "redux";
import types from "./contacts-types";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contacts-actions";

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

/*Redux Tookit*/

const items = createReducer([], {
  [contactsActions.addContact]: (state, { payload }) =>
    state.find(({ name }) => name === payload.name)
      ? alert(`${payload.name} is already in contacts`)
      : [...state, payload],
  //   [contactsActions.addContact]: (state, { payload }) => [...state, payload],
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
//     //   return state.find(({ name }) => name === payload.name)
//     //     ? alert(`${payload.name} is already in contacts`)
//     //     : [...state, payload];

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
