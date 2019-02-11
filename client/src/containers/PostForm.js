import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Constants/Styles
import '../styles/css/index.css';

// Actions
import { submitPost } from '../actions/postActions.js';

class PostForm extends Component {
  constructor(props) {
    super(props)

    const authorInfo = () => {
      if (this.props.user) {
        return {
          id: this.props.user.id,
          username: this.props.user.username,
          email: this.props.user.email
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
  }

  onChangeHandler = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  onSubmitHandler = event => {
    event.preventDefault();

    this.props.submitPost(this.state);
    event.currentTarget.reset()
  }

  render() {
    let userLoggedIn = this.props.user ? this.props.user : false;

    // don't need this?
    // <input ref="authorInput" type="hidden" name="author" value={this.props.user} onChange={this.onChangeHandler} />
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="FormUp col-6 p-4 my-4">
          { userLoggedIn ? (
            <React.Fragment>
              <h3>Anything to discuss with the hive mind?</h3>
              <form id="post-form" onSubmit={this.onSubmitHandler.bind(this)}>
                <p>
                  <input className="mr-2" ref="titleInput" type="text" name="title" placeholder="Title/Topic" value={this.state.title} onChange={this.onChangeHandler} />
                  <input className="ml-2" ref="gameInput" type="text" name="game" placeholder="Game" value={this.state.game} onChange={this.onChangeHandler} />
                </p>
                <p>
                  <textarea ref="discussionInput" name="discussion" className="textarea" placeholder="Your thoughts...." value={this.state.discussion} onChange={this.onChangeHandler} />
                </p>
                <p>
                  How would you rate this game?
                </p>
                <p>
                  <input ref="ratingInput" type="number" name="rating" placeholder="Rating (1-10)" value={this.state.rating} onChange={this.onChangeHandler} />
                </p>
                <button type="submit">Add a post</button>
              </form>
            </React.Fragment>
            ) : ('Log in, dummy!') }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { ...state };
}

const mapDispatchToProps = dispatch => bindActionCreators({ submitPost }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
