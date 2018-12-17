import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions'
import PostForm from './PostForm';
import PostListItem from '../components/PostListItem';
import { LoadingPage } from '../components/LoadingPage';

class PostsPage extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    let hasData = (this.props.posts.loaded && !this.props.posts.loading)
    const posts = this.props.posts.all;

    return (
      <div className="PostsPage">
        { hasData ? (
          <React.Fragment>
            <PostForm user={this.props.auth.user} />
            <div className="PostsList text-left mt-3 ml-3">
              <div>
                {posts.map((post, i) => (
                  <PostListItem
                    key={i}
                    post={post}
                    updatePost={this.props.updatePost(post)} 
                  />
                ))}
              </div>
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
  // debugger
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  // debugger
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
