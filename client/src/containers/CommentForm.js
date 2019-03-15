import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Constants
import * as actions from '../actions';

// Static/Stateless
import SubmitButton from '../components/buttons/SubmitButton';

class CommentForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: '',
      post_id: props.postId,
      user_id: props.user.id,
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
    event.preventDefault();
    
    this.props.submitComment(this.state)
      .then(resp => {
        if (!resp) {
          this.refs.contentInput.value = '';
          this.setState({ content: '' });    
        } else {
          window.alert(`${resp}`);
        }
      });
  }

  render() {
    return (
      <div className="OneUp FormUp CommentUp">
        <h6>Add a comment:</h6>
        <form
          className="CommentForm"
          onSubmit={this.handleOnSubmit}
        >
          <p>
            <input
              ref="contentInput"
              className="mx-2"
              type="text"
              name="content"
              placeholder="Content"
              value={this.state.content}
              onChange={this.handleOnChange}
            />
            <SubmitButton
              text="Add a comment"
            />
          </p>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(CommentForm);
