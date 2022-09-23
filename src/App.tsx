import { Outlet, Link } from 'react-router-dom'
import Navigation from './components/Navigation'
import './scss/style.scss'

function App() {
  return (
    <>
      <header>
        <h1>
          <Link to={'/'}>Planets</Link>
        </h1>
        <nav className="navbar">
          <Navigation />
        </nav>
      </header>

      <Outlet />

      <footer>
        Photo by{' '}
        <a href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          NASA
        </a>{' '}
        on{' '}
        <a href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </footer>
    </>
  )
}

export default App
