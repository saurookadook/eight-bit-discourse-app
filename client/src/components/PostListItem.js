import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../actions';

class PostListItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      ...props.post
    }

    this.onClickHandler = this.onClickHandler.bind(this);
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
    const { post, user } = this.props;

    // TODO: configure vote count, possibly involves vote model? upvote/downvote?
    return (
      <div className="CloudBubble">
        <Link className="text-dark" to={`/posts/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
        <div>
          <p>
            <strong>Author:</strong> {post.author.username}
            <span className="Separator">||</span>
            <strong>Game of discussion:</strong> {post.game} 
            { user && (
              <React.Fragment>
                <span className="Separator">||</span>
                <button
                  className="BtnBasic"
                  onClick={this.onClickHandler}
                >
                  <strong>Votes:</strong> 
                  {post.vote_count} 
                </button>
              </React.Fragment>
            )}
          </p>
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