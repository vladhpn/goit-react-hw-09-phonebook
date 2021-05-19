import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { authOperations }  from '../../redux/auth';
import styles from './styles.module.scss'


class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1 className={styles.title}>Register</h1>
        <form
          onSubmit={this.handleSubmit}
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
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.label}>   
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.label}>
            
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button className={styles.button} type="submit">Register</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(Register);