import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Constants/Styles
import * as actions from '../actions';

// Static/Stateless
import SubmitButton from '../components/buttons/SubmitButton';
import CancelButton from '../components/buttons/CancelButton';

class EditInfoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.user.id,
      username: props.user.username,
      email: props.user.email
    }

    this.byPropKey = this.byPropKey.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  byPropKey = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.byPropKey(name, value);
  }

  updateUser = event => {
    event.preventDefault();

    this.props.updateUser(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <form
          className="EditInfoForm"
          onSubmit={this.updateUser}
        >
          <p>
            <input 
              ref="usernameInput"
              type="text"
              name="username"
              defaultValue={this.state.username}
              placeholder={this.state.username}
              onChange={this.handleOnChange}
            />
          </p>
          <p>
            <input
              ref="emailInput"
              type="text"
              name="email"
              defaultValue={this.state.email}
              placeholder={this.state.email}
              onChange={this.handleOnChange}
            />
          </p>
          <div className="ButtonsContainer">
            <SubmitButton
              text="Update"
            />
            <CancelButton
              onClick={this.props.onClick}
            />
          </div>
        </form>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(null, mapDispatchToProps)(EditInfoForm);