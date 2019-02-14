import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions'

// Static
import { LoadingPage } from '../components/LoadingPage';

// Content
import PostForm from './PostForm';
import PostListItem from '../components/PostListItem';


class PostsPage extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  // updateListItem(post) {
  //   debugger
  //   this.props.updatePost(post);
  // }

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
              <div>
                {posts.all.map((post, i) => (
                  <PostListItem
                    key={i}
                    post={post}
                    user={auth.user}
                    // updatePost={this.updateListItem(post)} 
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
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
