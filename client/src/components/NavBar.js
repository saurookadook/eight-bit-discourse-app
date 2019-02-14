import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
import * as routes from '../constants/routes';
import '../styles/css/index.css'

const NavBar = ({ isAuthenticated, logout }) =>
    <div className="NavBar fixed-top text-left py-2">
        <NavLink className="NavLink px-1 ml-4 text-light" to={routes.HOME}>Home</NavLink>
        <NavLink className="NavLink px-1 text-light" to={routes.POSTS}>Latest Posts</NavLink>
        { isAuthenticated ? ( 
          <React.Fragment>
            <NavLink className="NavLink px-1 ml-4 text-light" to={routes.ACCOUNT}>Account</NavLink>
            {/* <NavLink className="NavLink px-1 text-light" to={routes.USER_POSTS}>Your Posts</NavLink> */}
            <NavLink className="NavLink px-1 ml-4 text-light" to={routes.HOME} onClick={logout}>Logout</NavLink>
            </React.Fragment>
         ) : (
           <React.Fragment>
            <NavLink className="NavLink px-1 ml-4 text-light" to={routes.LOG_IN}>Log In</NavLink>
            <NavLink className="NavLink px-1 ml-4 text-light" to={routes.SIGN_UP}>Sign up</NavLink>
          </React.Fragment>
        )}  
      </div>

export default NavBar;