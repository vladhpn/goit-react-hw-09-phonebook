import { connect } from 'react-redux'
import { operations, selectors } from '../../redux/contacts';
import PropTypes from 'prop-types';
import styles from './styles.module.scss'
import DeleteIcon from '@material-ui/icons/Delete';
import PersonIcon from '@material-ui/icons/Person';
import { blue } from '@material-ui/core/colors';


const ContactList = ({contacts, onDeleteContact }) =>{return (<>
    <ul className={styles.list} >{contacts.map(({id, name, number}) => <li key={id} className={styles.item}>
        {/* <PersonIcon fontSize='large' style={{ color: blue[500] }}/> */}
        <p className={styles.contact_name}> <PersonIcon fontSize='large' style={{ color: blue[500] }}/>{name}:</p>
        <p>{number}</p>
        <button className={styles.button} onClick={()=> onDeleteContact(id)}><span className={styles.button_text}>Delete</span> <DeleteIcon/></button>
        </li>)}
        </ul> </>);
    } 

    ContactList.propTypes = {
     onDeleteContact: PropTypes.func.isRequired
    }

      const mapStateToProps = state => ({
        contacts: selectors.getVisibleContacts(state)
    })
    const mapDispatchToProps = dispatch => ({
        onDeleteContact: (id) => dispatch(operations.deleteContact(id)),
    })
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
