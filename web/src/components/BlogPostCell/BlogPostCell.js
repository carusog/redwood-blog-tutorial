export const QUERY = gql`
  query PostQuery($id: Int!) {
    post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ post, id, rand }) => {
  return (
    <>
      <h1>
        Post id is {id}, and random number is {rand}
      </h1>
      <pre>{JSON.stringify(post, null, 4)}</pre>
    </>
  )
}
