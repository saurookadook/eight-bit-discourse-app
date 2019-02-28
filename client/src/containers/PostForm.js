import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Constants/Styles
import { submitPost } from '../actions/postActions.js';

class PostForm extends Component {
  constructor(props) {
    super(props)

    const authorInfo = () => {
      if (props.user) {
        return {
          id: props.user.id,
          username: props.user.username,
          email: props.user.email
        }
      } else {
        return null;
      }
      
    }

    this.state = {
      title: '',
      game: '',
      author: authorInfo(),
      discussion: '',
      rating: ''
    }

    this.byPropKey = this.byPropKey.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
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

  onSubmitHandler = event => {
    event.preventDefault();

    this.props.submitPost(this.state);
    event.currentTarget.reset();
  }

  render() {
    let userLoggedIn = this.props.user ? this.props.user : false;

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="OneUp FormUp p-4 my-4">
          { userLoggedIn ? (
            <React.Fragment>
              <h3>Anything to discuss with the hive mind?</h3>
              <form
                id="post-form"
                onSubmit={this.onSubmitHandler}
              >
                <p>
                  <input
                    className="mr-2"
                    ref="titleInput"
                    type="text"
                    name="title"
                    placeholder="Title/Topic"
                    value={this.state.title}
                    onChange={this.onChangeHandler}
                  />
                  <input
                    className="ml-2"
                    ref="gameInput"
                    type="text"
                    name="game"
                    placeholder="Game"
                    value={this.state.game}
                    onChange={this.onChangeHandler}
                  />
                </p>
                <p>
                  <textarea
                    ref="discussionInput"
                    name="discussion"
                    className="textarea"
                    placeholder="Your thoughts...."
                    value={this.state.discussion}
                    onChange={this.onChangeHandler}
                  />
                </p>
                <p>
                  How would you rate this game?
                </p>
                <p>
                  <input
                    ref="ratingInput"
                    type="number"
                    name="rating"
                    placeholder="Rating (1-10)"
                    value={this.state.rating}
                    onChange={this.onChangeHandler}
                  />
                </p>
                <button type="submit">
                  Add a post
                </button>
              </form>
            </React.Fragment>
            ) : ('Log in, dummy!') }
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ submitPost }, dispatch);

export default connect(null, mapDispatchToProps)(PostForm);
