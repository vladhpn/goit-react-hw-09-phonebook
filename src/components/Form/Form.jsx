import { Component } from "react";
import { connect } from 'react-redux';
import { operations } from '../../redux/contacts';
import { toast } from 'react-toastify';
import styles from '../Form/styles.module.scss';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


class Form extends Component{

    state = {
        name: '',
        number: '',
    }

    handleInputChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({
          [name]: value,
        });
      };
   

      handleSubmit = (event) => {
        event.preventDefault();

        const { name } = this.state;
        const { contacts } = this.props;
        const findContact = contacts.find(
          (item) => item.name.toLowerCase() === name.toLowerCase()
        );
        if (findContact) {
          toast.warning(`${name} is already in contacts`);
          this.reset();
          return;
        }

        this.props.onSubmit(this.state );
        this.reset();
      };

      reset = () => {
          this.setState({name : '', number : ''})
      }

   

    render(){
        return(<>
        
            <h1 className={styles.title}>Phone book</h1>
            <form onSubmit={this.handleSubmit} className={styles.form}>
              <label className={styles.label}>
                <span className={styles.text}>Name</span>
                <input className={styles.input}
                  type='text'
                  name='name'
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                />
              </label>
              <label className={styles.label}>
                <span className={styles.text}>Phone</span>
                <input className={styles.input}
                  type='tel'
                  name='number'
                  value={this.state.number}
                  onChange={this.handleInputChange}
                  // pattern='(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})'
                  title='Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +'
                  required
                />
              </label>
              <button className={styles.button} type='submit'><span className={styles.content}>Add contact</span> <PersonAddIcon/></button>
            </form>
            
          </>)
    }
}

const mapStateToProps = ({ contacts: { contacts } }) => ({
  contacts,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name,number) => dispatch(operations.addContact(name,number)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);