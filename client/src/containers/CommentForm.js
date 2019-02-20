import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Constants/Styles
import * as actions from '../actions';

class CommentForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: props.user,
      content: ''
    }

    this.byPropKey = this.byPropKey.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
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

  handleOnSubmit = event => {
    event.preventDefault()

    let formContent = {
      ...this.state,
      postId: this.props.postId
    }
    
    this.props.submitComment(formContent);
    event.currentTarget.reset();
  }

  render() {
    return (
      <div className="OneUp FormUp CommentUp">
        <h3>Add a comment:</h3>
        <form
          className="CommentForm"
          onSubmit={this.handleOnSubmit}
        >
          <input
            ref="postId"
            type="hidden"
            name="post"
            value={this.props.postId}
          />
          <input
            ref="contentInput"
            className="mx-2"
            type="text"
            name="content"
            placeholder="Content"
            value={this.state.content}
            onChange={this.handleOnChange}
          />
          <button type="submit" >
            Add a comment
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(CommentForm);
