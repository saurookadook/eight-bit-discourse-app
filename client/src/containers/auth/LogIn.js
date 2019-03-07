import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions';
import * as routes from '../../constants/routes';

class LogInForm extends Component {
  constructor() {
    super()

    this.state = { 
      email: '',
      password: ''
    }

    this.byPropKey = this.byPropKey.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onLogIn = this.onLogIn.bind(this);
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

  onLogIn = event => {
    event.preventDefault();
    const { history } = this.props

    this.props.authenticate(this.state)
      .then(resp => {
        if (!resp) {
          history.push(routes.HOME)
          window.alert("#achievement_unlocked")
        } else {
          window.alert('Sorry, your email and/or password is incorrect. Please try again.')
        }
      })
  }

  render() {
    return (
      <div className="OneUp FormUp">
        <h3 className="FormUpHeader">Continue the discourse...</h3>
        <form
          id="post-form"
          onSubmit={this.onLogIn}
        >
          <p>
            <span className="InputLabel">
              Email:
            </span>
            <input
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
          <button type="submit">
            Log In
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(LogInForm);
