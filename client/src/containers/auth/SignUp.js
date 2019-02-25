import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Constants/Styles
import * as actions from '../../actions';
import * as routes from '../../constants/routes';

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      username: '',
      email: '',
      password: ''
    }
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
      .then(resp => {
        if (!resp) {
          history.push(routes.HOME);
          window.alert("#achievement_unlocked");
        } else {
          window.alert(`Sorry, there was an issue logging you in. Please try again after fixing the following: - ${resp}`);
        }
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="OneUp FormUp col-6 p-4 my-4">
            <h2 className="ErrorMsg">
              Please Note: this is currently broken. You can see any open issues or pull requests that address it <a href="https://github.com/saurookadook/eight-bit-discourse-app">here.</a>
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
