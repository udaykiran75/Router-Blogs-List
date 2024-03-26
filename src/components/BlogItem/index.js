import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem

  return (
    <li>
      <div className="top-div">
        <h1 className="title">{title}</h1>
        <p className="para">{publishedDate}</p>
      </div>
      <p className="para">{description}</p>
      <hr className="hr-line" />
    </li>
  )
}
export default BlogItem
