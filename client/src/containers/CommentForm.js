import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitComment } from '../actions/commentActions.js';


class CommentForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: props.user,
      content: ''
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
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
    // debugger
    // eventually have user input default to logged in user? (or provide that information via hidden inputs?)
    // <input ref="userId" type="hidden" naame="userId" value={this.state.user.id} />
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="OneUp FormUp col-8 p-3 my-4">
            <h3>Add a comment:</h3>
            <form className="CommentForm" onSubmit={this.handleOnSubmit}>
              <input ref="postId" type="hidden" name="post" value={this.props.postId} />
              <input ref="contentInput" className="mx-2" type="text" name="content" placeholder="Content" value={this.state.content} onChange={this.handleOnChange} />
              <button type="submit">Add a comment</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    submitComment: submitComment
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(CommentForm);
