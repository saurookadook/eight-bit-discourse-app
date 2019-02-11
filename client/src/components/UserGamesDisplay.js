import React from 'react';
import { Link } from 'react-router-dom';

const GameLink = (post, i) => {
  return (
    <div 
      className="PostBlock"
      key={i}
    >
      <Link
        className="PostLink"
        to={`/posts/${post.id}`}
      >
        {post.title}
      </Link>
    </div>
  )
}

const UserGamesDisplay = ({ posts }) => {

  return (
    <div className="UserGamesContainer ">
      <h3>Your Posts:</h3>
      { posts.map((post, i) => {
        return GameLink(post, i)
      })}
    </div>
  )
}

export default UserGamesDisplay;