import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SubmitButton from '../../components/buttons/SubmitButton';

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
      <div className="OneUp FormUp">
        <h6 className="FormUpHeader">Join the conversation!</h6>
        <form id="PostFormUp" onSubmit={this.onSignUp.bind(this)}>
          <p>
            <span className="InputLabel">
              Username: 
            </span>
            <input 
                className="" 
                ref="username" 
                type="text" 
                name="username" 
                placeholder="Username" 
                value={this.state.username} 
                onChange={this.onChangeHandler}
            />
          </p>
          <p>
            <span className="InputLabel">
              Email:
            </span>
            <input 
              className="" 
              ref="email" 
              type="text" 
              name="email" 
              placeholder="Email" 
              value={this.state.email} 
              onChange={this.onChangeHandler} 
            />
          </p>
          <p>
            <span className="InputLabel">
              Password:
            </span>
            <input 
              ref="password" 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={this.state.password}
              onChange={this.onChangeHandler} 
            />
          </p>
          <SubmitButton
            text="Sign Up"
          />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(SignUpForm);
