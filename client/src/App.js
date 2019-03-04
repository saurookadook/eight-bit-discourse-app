import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Constants/Styles
import * as actions from './actions';
import * as routes from './constants/routes';
import './styles/css/index.css';

// Navigation
import NavBar from './components/NavBar';

// Static
import HtmlHead from './components/shared/HtmlHead';
import { PageLayout } from './components/PageLayout'
import { Footer } from './components/Footer';
import { Welcome } from './components/Welcome';
import About from './components/About';


// Content
import PostsPage from './containers/PostsPage';
import PostPage from './containers/PostPage';
import AccountPage from './containers/AccountPage';
// import UserPostsPage from './containers/UserPostsPage';

// User Auth
import LogInForm from './containers/auth/LogIn';
import SignUpForm from './containers/auth/SignUp';

class App extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { logout } = this.props;
    
    const publicViews = (
      <React.Fragment>
        <Route exact path={routes.HOME} component={Welcome} />
        <Route exact path={routes.ABOUT} component={About} />
        <Route exact path={routes.POSTS} component={PostsPage} />
        <Route exact path={routes.POST} component={PostPage} />
      </React.Fragment>
    )

    const unprotectedViews = (
      <React.Fragment>
        <Route exact path={routes.LOG_IN} component={LogInForm} />
        <Route exact path={routes.SIGN_UP} component={SignUpForm} />
      </React.Fragment>
    )

    const protectedViews = (
      <React.Fragment>
        {/* <Route exact path={routes.USERS} component={UsersList} /> */}
        <Route exact path={routes.ACCOUNT} component={() => <AccountPage user={user} />} /> 
        {/* <Route exact path={routes.USERS_POSTS} component={UserPostsPage} /> */} 
      </React.Fragment>
    )

    return (
      <Router>
        <div className="App">
          <HtmlHead />
          <NavBar 
            isAuthenticated={isAuthenticated} 
            logout={logout} 
          />
          <PageLayout />
          <div className="ViewContainer">
            { isAuthenticated ?
              protectedViews
              : unprotectedViews }
            { publicViews }
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return { ...state }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
