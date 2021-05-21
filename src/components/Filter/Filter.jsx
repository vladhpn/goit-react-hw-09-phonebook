import React, {useCallback} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { action, selectors } from '../../redux/contacts'
import styles from './styles.module.scss'

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectors.getFilter);
  const onChange = useCallback((e) => {dispatch(action.changeFilter(e.target.value))},[dispatch]);

    return(
    <>
    <h2 className={styles.title}>Contacts</h2>  
     <label className={styles.label}>
       <span className={styles.text}>Find contacts by name</span> 
          <input className={styles.input} type='text' value={value} onChange={onChange} />
      </label> </>)}

export default Filter;