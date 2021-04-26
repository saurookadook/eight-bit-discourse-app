import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Constants
import * as actions from '../actions';

// Static/Stateless
import { LoadingPage } from '../components/LoadingPage';

// Content
import PostDisplay from '../components/PostDisplay';

class PostPage extends Component {

  componentDidMount() {
    // TODO: only call fetchPost if it's a new post
    // if (this.props.postId !== this.props.post.post.id) {
      this.props.fetchPost(this.props.postId)
    // }
  }

  render() {
    let hasData = (this.props.post.loaded && !this.props.post.loading)
    const { auth, post } = this.props;

    return (
      <div className="PostPage">
        { hasData ? (
          <PostDisplay
            auth={auth}
            post={post.post}
          />
        ) : (
          <LoadingPage />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
      ...state,
      postId: ownProps.match.params.id
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
