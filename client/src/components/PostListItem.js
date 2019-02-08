import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class PostListItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      ...props.post
    }
  }


  onClickHandler = event => {
    // debugger
    event.preventDefault();
    // debugger

    const { currentState } = this.state
    const { currentPost } = {
      ...currentState.post,
      vote_count: currentState.post.vote_count += 1
    } 

  //   this.props.updateVote(currentPost)
    
    this.setState(() => {
      // debugger
      return {
          ...currentState,
          post: {
            ...currentPost
          }
        }
    })
  }

  render() {
    const { post } = this.props;
    // debugger
    return (
      <div className="CloudBubble p-2 my-2">
        <Link className="text-dark" to={`/posts/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
        <div>
          <p>Author: {post.author.username} || Game of discussion: {post.game} || <button onClick={this.onClickHandler.bind(this)}>Votes: {post.vote_count} </button></p>
        </div>
      </div>
    )
  }
}

// TODO: for updating vote count
// const mapStateToProps = (state) => {
//   return {
//     ...state.post
//   }
// }

// const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(PostListItem);
export default PostListItem;