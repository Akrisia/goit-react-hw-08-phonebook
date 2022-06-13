import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { updateFilter } from '../../redux/contacts/contacts-actions'


const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const onUpdateFilter = event => dispatch(updateFilter(event.target.value));
    return (
        <label className={s.filter}>
            Find contacts by name
            <input className={s.input}
                type="text"
                name="filter"
                value={filter}
                onChange={onUpdateFilter}
            />
        </label>
    )
}

export default Filter;