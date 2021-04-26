import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Constants
import * as actions from '../actions'

// Static/Stateless
import { LoadingPage } from '../components/LoadingPage';

// Content
import PostForm from './PostForm';
import PostListItem from '../components/PostListItem';


class PostsPage extends Component {
  componentDidMount() {
    if (!this.props.posts.all) {
      this.props.fetchPosts();
    }
  }

  removePost = (data) => {
    const postData = {
      ...data.post
    }

    this.props.deletePost(postData);
  }

  render() {
    let hasData = (this.props.posts.loaded && !this.props.posts.loading)
    const { posts, auth }  = this.props;

    return (
      <div className="PostsContainer">
        { hasData ? (
          <React.Fragment>
            <PostForm
              user={auth.user}
            />
            <div className="PostsList text-left mt-3 ml-3">
              {(Array.isArray(posts.all) && posts.all.map((post, i) => (
                <PostListItem
                  key={i}
                  post={post}
                  user={auth.user}
                  onDelete={this.removePost}
                />
              ))
              || 'No posts :(')}
            </div>
          </React.Fragment>
        ) : (
          <LoadingPage />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
