// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemData: {}, isLoading: false}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const blogData = await response.json()
    const updatedBlogData = {
      author: blogData.author,
      avatarUrl: blogData.avatar_url,
      id: blogData.id,
      imageUrl: blogData.image_url,
      title: blogData.title,
      topic: blogData.topic,
      content: blogData.content,
    }
    this.setState({blogItemData: updatedBlogData, isLoading: false})
  }

  getRenderedBlogData = () => {
    const {blogItemData} = this.state
    const {title, avatarUrl, author, id, imageUrl, content} = blogItemData
    return (
      <div className="blog-info">
        <h1 className="title-name">{title}</h1>
        <div className="blog">
          <img src={avatarUrl} alt={`avatar${id}`} className="avatar-img" />
          <p className="author">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-image" />
        <p className="description">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-items-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.getRenderedBlogData()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
