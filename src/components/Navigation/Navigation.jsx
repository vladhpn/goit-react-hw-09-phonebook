import React from 'react' 
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {authSelectors} from '../../redux/auth'
import routes from '../../routes'

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#2196f3',
  },
};

export default function Navigation (){
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)

  return(
    <nav>
    <NavLink to={routes.home} exact style={styles.link} activeStyle={styles.activeLink}>
    Main
    </NavLink>

    {isAuthenticated && (    
    <NavLink
      to={routes.contacts}
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Contacts
    </NavLink>
    )}

  </nav>
  )
}
