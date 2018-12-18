import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostListItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      post: props.post
    }
  }

  // onClickHandler = event => {
  //   event.preventDefault();
    // debugger

    // TODO: abstract this in PostsList?
    // const { currentState } = this.state
    // const { currentPost } = this.state.post

    // this.setState({
    //   ...currentState,
    //   post: {
    //     ...currentPost,
    //     vote_count: currentPost.vote_count += 1
    //   } 
    // })
  //   this.setState((prevState, props) => {
  //     // debugger
  //     return {
  //         ...prevState,
  //         vote_count: prevState.post.vote_count++
  //       }
  //   })
  // }

  render() {
    const { key, post, updateListItem } = this.props;
    // debugger
    return (
      <div className="CloudBubble p-2 my-2">
        <Link className="text-dark" to={`/posts/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
        <div>
          <p>Author: {post.author.username} || Game of discussion: {post.game} || <button onClick={updateListItem}>Votes: {post.vote_count} </button></p>
        </div>
      </div>
    )
  }
}

export default PostListItem;
