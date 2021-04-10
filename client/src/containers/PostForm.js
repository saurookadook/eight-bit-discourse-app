import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Constants
import { submitPost } from '../actions/postActions.js';

// Static/Stateless
import SubmitButton from '../components/buttons/SubmitButton';

class PostForm extends Component {
  constructor(props) {
    super(props)

    const userInfo = () => {
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
      user: userInfo(),
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

    this.props.submitPost(this.state)
      .then(resp => {
        if (!resp) {
          this.refs.titleInput.value = '';
          this.refs.gameInput.value = '';
          this.refs.discussionInput.value = '';
          this.refs.ratingInput.value = '';

          this.setState({
            title: '',
            game: '',
            user: this.state.user,
            discussion: '',
            rating: ''
          })
          window.alert("New post successfully added!");
        } else {
          window.alert(`${resp}`);
        }
      });
  }

  render() {
    const userLoggedIn = !!this.props.user;
    const { discussion, game, rating, title } = this.state;
    const { onChangeHandler, onSubmitHandler } = this;

    return (
      <div className="OneUp FormUp">
      { userLoggedIn ? (
        <React.Fragment>
          <h6 className="FormUpHeader">Anything to discuss with the hive mind?</h6>
          <form
            id="PostFormUp"
            onSubmit={onSubmitHandler}
          >
            <p>
              <input
                className="mr-2"
                ref="titleInput"
                type="text"
                name="title"
                placeholder="Title/Topic"
                value={title}
                onChange={onChangeHandler}
              />
              <input
                className="ml-2"
                ref="gameInput"
                type="text"
                name="game"
                placeholder="Game"
                value={game}
                onChange={onChangeHandler}
              />
            </p>
            <p>
              <textarea
                ref="discussionInput"
                name="discussion"
                className="textarea"
                placeholder="Your thoughts...."
                value={discussion}
                onChange={onChangeHandler}
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
                value={rating}
                onChange={onChangeHandler}
              />
            </p>
            <SubmitButton
              text="Add a post"
            />
          </form>
        </React.Fragment>
        ) : (<h4>Log in, dummy!</h4>) }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ submitPost }, dispatch);

export default connect(null, mapDispatchToProps)(PostForm);
