import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import ContactList from '../../components/ContactList'
import Form from '../../components/Form';
import Filter from '../../components/Filter'
import { operations, } from '../../redux/contacts';


export default function Contacts () {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts())
  }, [dispatch])
  
        return ( 
            <>    
            <Form />
            <Filter />    
             <ContactList />
             </>
        );
      }