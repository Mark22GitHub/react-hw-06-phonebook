import React, { Component } from "react";
import ContactForm from "./Components/ContactForm/";
import ContactList from "./Components/ContactList/";
import Filter from "./Components/Filter/";

class App extends Component {
  // state = {
  //   contacts: [],
  //   filter: "",
  // };

  // componentDidMount() {
  //   const getContacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(getContacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { contacts } = this.state;
  //   const stringifiedContacts = JSON.stringify(contacts);

  //   if (contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", stringifiedContacts);
  //   }
  // }

  // addContact = ({ name, number }) => {
  //   const { contacts } = this.state;
  //   const contact = {
  //     id: uuidv4(),
  //     name: name,
  //     number: number,
  //   };

  //   contacts.find((contact) => contact.name === name)
  //     ? alert(`${name} is already in contacts`)
  //     : this.setState(({ contacts }) => ({
  //         contacts: [...contacts, contact],
  //       }));
  // };

  // deleteFromContacts = (contactListId) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter(
  //       (contact) => contact.id !== contactListId
  //     ),
  //   }));
  // };

  // changeFilter = (evt) => {
  //   this.setState({ filter: evt.currentTarget.value });
  // };

  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  render() {
    //

    return (
      <div style={{ width: "300px", margin: "0 auto" }}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
