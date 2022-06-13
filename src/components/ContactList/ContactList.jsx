import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { deleteContact } from '../../redux/contacts/contacts-actions'

const ContactList = () => {
    const items = useSelector(getFilteredContacts);
    const dispatch = useDispatch();

    const onDeleteContact = id => dispatch(deleteContact(id));

        return (
              <ul className={s.list}>
                    {items.map(({ name, number, id }) => {
                        return (
                            <li key={id} className={s.item}>
                                {name}: {number}
                                <button type='button' className={s.button} id={id} onClick={() => onDeleteContact(id)}>Delete</button>
                            </li>
                        )
                    })}
                </ul>
            )
    };

export default ContactList;