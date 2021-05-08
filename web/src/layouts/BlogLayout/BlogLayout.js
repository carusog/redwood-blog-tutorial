import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Redwood Blog</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
            <li>
              <button type="button" onClick={isAuthenticated ? logOut : logIn}>
                {isAuthenticated ? 'Log Out' : 'Log In'}
              </button>
            </li>
            {isAuthenticated && <li>{currentUser.email}</li>}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <pre
        style={{
          backgroundColor: 'lightgray',
          padding: '1.5rem',
          borderRadius: '1rem',
          fontSize: '1rem',
        }}
      >
        <h3 style={{ marginTop: '0' }}>currentUser object:</h3>
        <code>{JSON.stringify(currentUser, null, 4)}</code>
      </pre>
    </>
  )
}

export default BlogLayout
