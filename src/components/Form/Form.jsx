import { useState, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { operations, selectors } from '../../redux/contacts';
import { toast } from 'react-toastify';
import styles from '../Form/styles.module.scss';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export default function Form (){
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectors.getContacts)

    const handleInputChange = useCallback((event) => {
      const { name, value } = event.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default: return;
        };
      },[])
      
     const reset = () => {
      setName('');
      setNumber('');
  }

      const handleSubmit = useCallback((event) => {
        event.preventDefault();

        const findContact = contacts.find(
          (item) => item.name.toLowerCase() === name.toLowerCase()
        );
        const findNumber = contacts.find((item) => item.number === number) 
        if (findContact) {
          toast.warning(`${name} is already in contacts`);
          reset();
          return;
        }
        else if(findNumber){
          toast.warning(`${number} is already in contacts`);
          reset();
          return;
        }
        dispatch(operations.addContact(name, number))
   
        reset();
      },[dispatch, contacts, name, number])

        return(<>
        
            <h1 className={styles.title}>Phone book</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.label}>
                <span className={styles.text}>Name</span>
                <input className={styles.input}
                  type='text'
                  name='name'
                  value={name}
                  onChange={handleInputChange}
                  pattern="^[a-zA-Z??-????-??]+(([' -][a-zA-Z??-????-?? ])?[a-zA-Z??-????-??]*)*$"
                  title="?????? ?????????? ???????????????? ???????????? ???? ????????, ??????????????????, ???????? ?? ????????????????. ???????????????? Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan ?? ??. ??."
                  required
                />
              </label>
              <label className={styles.label}>
                <span className={styles.text}>Phone</span>
                <input className={styles.input}
                  type='tel'
                  name='number'
                  value={number}
                  onChange={handleInputChange}
                  pattern='(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})'
                  title='?????????? ???????????????? ???????????? ???????????????? ???? 11-12 ???????? ?? ?????????? ?????????????????? ??????????, ??????????????, ????????, ?????????????? ???????????? ?? ?????????? ???????????????????? ?? +'
                  required
                />
              </label>
              <button className={styles.button} type='submit'><span className={styles.content}>Add contact</span> <PersonAddIcon/></button>
            </form>
            
          </>)
    }



