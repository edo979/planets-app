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
    </>
  )
}

export default App
