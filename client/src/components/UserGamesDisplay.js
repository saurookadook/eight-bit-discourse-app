import React from 'react';
import { Link } from 'react-router-dom';

const GameLink = (post, i) => {
  return (
    <Link
      className="PostBlock"
      key={i}
      to={`/posts/${post.id}`}
    >
      {post.title}
    </Link>
  )
}

const UserGamesDisplay = ({ posts }) => {

  return (
    <div className="UserGamesContainer ">
      { posts.map((post, i) => {
        return GameLink(post, i)
      })}
    </div>
  )
}

export default UserGamesDisplay;