export const QUERY = gql`
  query BlogPostQuery {
    blogPost {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ blogPost }) => {
  return <div>{JSON.stringify(blogPost)}</div>
}
