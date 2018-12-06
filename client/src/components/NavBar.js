import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/authActions';
import * as routes from '../constants/routes';
import '../styles/css/NavBar.css'

// TODO: this seems unnecessary?
// if (!localStorage.getItem('token')) {
//   localStorage.setItem('token', '');
  // const { authToken } = localStorage.token;
// } else {
//   const { authToken } = localStorage.token;
// }

const NavBar = ({ authToken, signOut }) =>
    <div className="NavBar fixed-top text-left py-2">
        <NavLink className="NavLink px-1 ml-4 text-light" to={routes.HOME}>Home</NavLink>
        <NavLink className="NavLink px-1 text-light" to={routes.POSTS}>Latest Posts</NavLink>
        { authToken ? ( 
          <React.Fragment>
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

// #### Previous ####
// class NavBar extends Component {

  // render() {
    // debugger
//     return (
//       <div className="NavBar fixed-top text-left py-2">
//         <NavLink className="NavLink px-1 ml-4 text-light" to={routes.HOME}>Home</NavLink>
//         <NavLink className="NavLink px-1 text-light" to={routes.POSTS}>Latest Posts</NavLink>

//         { isAuthenticated ? ( 
//           <React.Fragment>
//             <NavLink className="NavLink px-1 text-light" to={routes.USER_POSTS}>Your Posts</NavLink>
//             <NavLink className="NavLink px-1 ml-4 text-light" to={routes.LOG_OUT}>Logout</NavLink>
//             </React.Fragment>
//          ) : (
//            <React.Fragment>
//             <NavLink className="NavLink px-1 ml-4 text-light" to={routes.LOG_IN}>Log In</NavLink>
//             <NavLink className="NavLink px-1 ml-4 text-light" to={routes.SIGN_UP}>Sign up</NavLink>
//           </React.Fragment>
//         )}
        
//       </div>
//     );
//   };
// };

const mapDispatchToProps = dispatch => bindActionCreators(logout, dispatch);

export default connect(null, mapDispatchToProps)(NavBar);