import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Constants/Styles
import * as actions from '../../actions';
import * as routes from '../../constants/routes';

// TODO: unnecessary?
const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    errors: []
}

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  byPropKey = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  onChangeHandler = event => {
    const { name, value } = event.target
    this.byPropKey(name, value);
  }

  onSignUp = event => {
    event.preventDefault();
    const { history } = this.props

    this.props.signup(this.state)
      .then(() => {
        history.push(routes.HOME)
      })
      .catch(errors => {
        this.setState({ errors: errors })
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="OneUp FormUp col-6 p-4 my-4">
            <h2 className="ErrorMsg">
              Please Note: this is currently broken. You can see an open issues or pull requests that address it <a href="https://github.com/saurookadook/eight-bit-discourse-app">here.</a>
            </h2>
            <h3>Join the conversation!</h3>
            <form id="post-form" onSubmit={this.onSignUp.bind(this)}>
              <p>
                Username: 
                <input 
                    className="mr-2" 
                    ref="username" 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={this.state.username} 
                    onChange={this.onChangeHandler}
                />
              </p>
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
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(SignUpForm);
