import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './styles.module.scss'


export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleChange = useCallback(({ target: { name, value } }) => {
  switch(name){
    case 'email':
      setEmail(value);
      break;
    case 'password':
      setPassword(value);
      break;

    default: return;
  }
}, [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    dispatch(authOperations.logIn({email, password}))
    setEmail('');
    setPassword('');
  }, [dispatch, email, password])

    return (
      <div>
        <h1 className={styles.title}>Login</h1>
        <form
          onSubmit={handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            <input
            className={styles.input}
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
            />
          </label>

          <label className={styles.label}>
            <input
            className={styles.input}
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
            />
          </label>

          <button className={styles.button} type="submit">Login</button>
        </form>
      </div>
    );
  }




