import { Outlet } from 'react-router-dom'
import './scss/style.scss'

function App() {
  return (
    <>
      <header>
        <h1>Planets</h1>
        <nav className="navbar">
          <ul className="navbar_list">
            <li className="navbar_item">
              <a href="#" className="navbar_link">
                Planet
              </a>
            </li>
            <li className="navbar_item">
              <a href="#" className="navbar_link">
                Planet
              </a>
            </li>
            <li className="navbar_item">
              <a href="#" className="navbar_link">
                Planet
              </a>
            </li>
            <li className="navbar_item">
              <a href="#" className="navbar_link">
                Planet
              </a>
            </li>
            <li className="navbar_item">
              <a href="#" className="navbar_link">
                Planet
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  )
}

export default App
