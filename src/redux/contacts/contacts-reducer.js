import { combineReducers } from "redux";
import types from "./contacts-types";

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

// contacts.find((contact) => contact.name === name)
//   ? alert(`${name} is already in contacts`)
//   : this.setState(({ contacts }) => ({
//       contacts: [...contacts, contact],
//     }));

// return state.find((name) => name === name)
//   ? alert(`${name} is already in contacts`)
//   : [...state, payload];

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];
    //   return state.find((name) => name === name)
    //     ? alert(`${payload.name} is already in contacts`)
    //     : [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
