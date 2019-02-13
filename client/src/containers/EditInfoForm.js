import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class EditInfoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        username: '',
        email: ''
      }
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      user: {
        [name]: value
      }
    });
  }

  updateUser = event => {
    event.preventDefault();
    debugger
    // const { user } = this.props;
    // this.props.updateInfo(user);
  }

  render() {
    const { user } = this.props.auth;

    return (
      <React.Fragment>
        <form
          className="EditInfoForm"
          onSubmit={this.updateUser.bind(this)}
        >
          <input 
            ref="usernameInput"
            type="text"
            name="username"
            placeholder={user.username}
            value={this.state.user.username}
            onChange={this.handleOnChange.bind(this)}
          />
          <input
            ref="emailInput"
            type="text"
            name="email"
            placeholder={user.email}
            value={this.state.user.email}
            onChange={this.handleOnChange.bind(this)}
          />
          <button type="submit">
            Update Info
          </button>
        </form>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return { ...state };
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EditInfoForm);