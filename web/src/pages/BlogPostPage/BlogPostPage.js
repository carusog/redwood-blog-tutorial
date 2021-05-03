import BlogPostCell from 'src/components/BlogPostCell'

const BlogPostPage = ({ id }) => {
  return <BlogPostCell id={id} rand={Math.floor(Math.random() * 10) + 1} />
}

export default BlogPostPage
