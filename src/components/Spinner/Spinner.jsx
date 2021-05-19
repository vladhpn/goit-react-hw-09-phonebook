import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './styles.module.scss'

function Spinner() {
  return(<Loader className={styles.Spinner} type="Rings" color="#00BFFF" height={80} width={80} />
)}  

export default Spinner;