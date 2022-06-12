import s from './App.module.css';
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm";
import Filter from './Filter';
import ContactList from './ContactList';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ??[];
  });
  const [filter, setFilter] = useState(() => '');

  const formSubmitHandler = ({ name, number }) => {
    if (contacts.map(contact => contact.name.toLowerCase()).includes(name.toLowerCase())) {
      return alert(`${name} is already in contacts`)
    };

    const contact = {
      id: nanoid(),
      name,
      number
    };

    setContacts(contacts => ([...contacts, contact]));
  };

  const handleFilter = (event) => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const filteredContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const deleteContact = (id) => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList filteredContacts={filteredContacts()} deleteContact={deleteContact} />
    </div>
  );
};