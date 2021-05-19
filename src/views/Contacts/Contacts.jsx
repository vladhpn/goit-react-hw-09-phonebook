import { Component } from 'react';

import { connect } from 'react-redux';
import ContactList from '../../components/ContactList'
import Form from '../../components/Form';
import Filter from '../../components/Filter'
import { operations, } from '../../redux/contacts';

class Contacts extends Component {
    componentDidMount() {
        this.props.fetchContacts();
      }
      render() {
        return ( 
            <>    
            <Form />
            <Filter />    
             <ContactList />
             </>
        );
      }
    }
  
    const mapDispatchToProps = dispacth => ({
      fetchContacts: () => dispacth(operations.fetchContacts()),
    });
    export default connect(null, mapDispatchToProps)(Contacts);