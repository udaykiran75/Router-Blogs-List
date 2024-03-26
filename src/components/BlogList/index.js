import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogDetails} = props

  return (
    <ul className="bloglist">
      {blogDetails.map(blogItem => (
        <BlogItem blogItem={blogItem} key={blogItem.id} />
      ))}
    </ul>
  )
}
export default BlogList
