import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts/contacts-reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

// const reducer = (state = {}, action) => state;

const store = createStore(rootReducer, composeWithDevTools());

export default store;
