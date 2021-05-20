import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from '../../images/avatar.jpeg';
import styles from './styles.module.scss'

export default function UserMenu () {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName)
  const onLogout = useCallback(() => {dispatch(authOperations.logOut())},[dispatch]);
 
  return(
      <div className={styles.container}>
        <img src={defaultAvatar} alt="" width="32" className={styles.avatar} />
        <span className={styles.name}>Welcome, <span className={styles.user_name}>{name}</span>  </span>
        <button className={styles.button} type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
  )
} 
