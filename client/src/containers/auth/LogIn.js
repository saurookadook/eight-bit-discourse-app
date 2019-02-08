import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions';
import * as routes from '../../constants/routes';

import '../../styles/css/App.css';

const INITIAL_STATE = {
    email: '',
    password: ''
}

class LogInForm extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  // byPropKey = (name, value) => () => ({
  //   [name]: value
  // })

  onChangeHandler = event => {
    // TODO: refactor using byPropKey?
    const { name, value } = event.target
    // this.setState(byPropKey(name, value));
    this.setState({        
        [name]: value
    });
  }

  onLogIn = event => {
    event.preventDefault();
    const { history } = this.props

    this.props.authenticate(this.state)
      .then(() => {
        history.push(routes.HOME)
        window.alert("#achievement_unlocked")
      })
      .catch(errors => {
        this.setState({ errors: errors })
        window.alert("Sorry, there was an issue logging you in. Please try again.")
      })
      
  }

  render() {
    // --template--
    // <p>
    //   <input ref="authorInput" type="text" name="authorName" placeholder="Author" value={this.state.author} onChange={this.onSignup} />
    // </p>
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="FormUp col-6 p-4 my-4">
            <h3>Continue the discourse...</h3>
            <form id="post-form" onSubmit={this.onLogIn}>
              <p>
                Email:
                <input 
                  className="ml-2" 
                  ref="email" 
                  type="text" 
                  name="email" 
                  placeholder="Email" 
                  value={this.state.email} 
                  onChange={this.onChangeHandler} 
                />
              </p>
              <p>
                Password:
                <input 
                  ref="password" 
                  type="password" 
                  name="password" 
                  placeholder="Password" 
                  value={this.state.password}
                  onChange={this.onChangeHandler} 
                />
              </p>
              <button type="submit">Log In</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(LogInForm);
