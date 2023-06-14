import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function initContact() {
  const contact = localStorage.getItem("contact");
  if (contact) {
    return JSON.parse(contact);
  } else {
    return [];
  }
}

const App = () => {
  const [contacts, setContacts] = useState(initContact);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert("A contact with this name is already in use");
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <input
        type="text"
        placeholder="Search"
        value={filter}
        onChange={handleFilterChange}
      />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
