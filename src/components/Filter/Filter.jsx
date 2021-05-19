import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { action, selectors } from '../../redux/contacts'
import styles from './styles.module.scss'

const Filter = ({value, onChange}) => {
    return(<>
    <h2 className={styles.title}>Contacts</h2>  
     <label className={styles.label}>
       <span className={styles.text}>Find contacts by name</span> 
        
          <input className={styles.input} type='text' value={value} onChange={onChange} />
        
      </label> </>)}

      Filter.propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired
      }

      const mapStateToProps = (state) => ({
         value: selectors.getFilter(state)
    })
     const mapDispatchToProps =  dispatch => ({
       onChange: e => dispatch(action.changeFilter(e.target.value))
     })

export default connect(mapStateToProps, mapDispatchToProps)(Filter);