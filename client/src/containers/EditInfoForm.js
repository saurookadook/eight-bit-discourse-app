import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

class EditInfoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: ''
    }
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  // handleOnSubmit = event => {
  //   event.preventDefault()
    
  //   this.props.submitComment();
  //   event.currentTarget.reset();
  // }

  render() {
    const { username, email } = this.props;

    return (
      <div className="DetailsContainer">
        <form className="EditInfoForm" onSubmit={this.handleOnSubmit.bind(this)}>
          <input ref="userInput" type="text" name="userusername" placeholder={username} value={this.state.username} onChange={this.handleOnChange} />
          <input ref="emailInput" type="text" name="email" placeholder={email} value={this.state.email} onChange={this.handleOnChange} />
          <button type="submit">Update Info</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { ...state };
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EditInfoForm);