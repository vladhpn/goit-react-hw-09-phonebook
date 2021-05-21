import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { operations, selectors } from '../../redux/contacts';
import styles from './styles.module.scss'
import DeleteIcon from '@material-ui/icons/Delete';
import PersonIcon from '@material-ui/icons/Person';
import { blue } from '@material-ui/core/colors';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectors.getVisibleContacts);
    const onDeleteContact = useCallback((id) => {dispatch(operations.deleteContact(id))},[dispatch]);

    return (
        <>
        <ul className={styles.list} >{contacts.map(({id, name, number}) => <li key={id} className={styles.item}>
            <p className={styles.contact_name}> <PersonIcon fontSize='large' style={{ color: blue[500] }}/>{name}:</p>
            <p>{number}</p>
            <button className={styles.button} onClick={()=> onDeleteContact(id)}><span className={styles.button_text}>Delete</span> <DeleteIcon/></button>
            </li>)}
        </ul> 
        </>);
    } 

export default ContactList;
