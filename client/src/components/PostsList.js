import React from 'react';
import PostListItem from './PostListItem'

const PostsList = ({ postsList, updatePost }) => {

  // debugger
  if (postsList) {
    const posts = postsList.map((post, index) => {
      return (
        <PostListItem 
          key={index} 
          post={post} 
          updatePost={updatePost}
        />
      )
    })

    return (
      <div className="PostsList text-left mt-3 ml-3">
        <div>{posts}</div>
      </div>
    )
  } else {
    return null;
  }
}

export default PostsList;
