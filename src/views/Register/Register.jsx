import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import  { authOperations }  from '../../redux/auth';
import styles from './styles.module.scss'

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  }

  const handleChange = useCallback(({ target: { name, value } }) => {
    
    switch (name){
      case 'name':
        setName(value);
        break;
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

    dispatch(authOperations.register({name, email, password}))
    reset();
  },[dispatch, name, email, password]);

    return (
      <div>
        <h1 className={styles.title}>Register</h1>
        <form
          onSubmit={handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            <input
            className={styles.input}
              type="text"
              name="name"
              placeholder="Username"
              value={name}
              onChange={handleChange}
            />
          </label>

          <label className={styles.label}>   
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label className={styles.label}>
            
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
          </label>

          <button className={styles.button} type="submit">Register</button>
        </form>
      </div>
    );
  }



