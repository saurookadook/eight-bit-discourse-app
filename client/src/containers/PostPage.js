import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Constants/Styles
import * as actions from '../actions';
import '../styles/css/index.css';

// Static
import { LoadingPage } from '../components/LoadingPage';

// Content
import PostDisplay from '../components/PostDisplay';

class PostPage extends Component {

  componentDidMount() {
    this.props.fetchPost(this.props.post)
  }

  render() {
    let hasData = (this.props.post.loaded && !this.props.post.loading)
    const { post } = this.props.post;

    return (
      <div className="PostPage">
        { hasData ? (
          <PostDisplay 
            post={post}
          />
        ) : (
          <LoadingPage />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // find the post by id in posts
  if (!state.post.loaded) { // somehow, `state.post` is getting set with `all` after hitting `fetchPost`
    let postId = parseInt(ownProps.match.params.id)
    return {
      post: {
        loading: false,
        loaded: false,
        postId: postId
      }
    }
  } else {
    return {
      post: state.post
    }
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
