// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {imageUrl, id, topic, title, avatarUrl, author} = blogDetails

  return (
    <Link className="blog-item-link" to={`/blogs/${id}`}>
      <div className="item-container">
        <img src={imageUrl} alt={title} className="image" />
        <div className="blog-details-list">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="blog-list">
            <img src={avatarUrl} alt={`avatarurl${id}`} className="avatar" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
