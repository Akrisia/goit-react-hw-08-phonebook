import s from './App.module.css';
import { useSelector } from 'react-redux';
import ContactForm from "./ContactForm";
import Filter from './Filter';
import Loader from './Loader';
import ContactList from './ContactList';

export function App() {
  const { isLoading } = useSelector(state => state.contacts);

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <Loader/>}
      <ContactList />
    </div>
  );
};