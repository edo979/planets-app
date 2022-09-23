import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import './scss/style.scss'

function App() {
  return (
    <>
      <header>
        <h1>Planets</h1>
        <nav className="navbar">
          <Navigation />
        </nav>
      </header>

      <Outlet />
    </>
  )
}

export default App
