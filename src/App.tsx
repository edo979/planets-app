import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import Navigation from './components/Navigation'
import './scss/style.scss'

function App() {
  const [toggleNav, setToggleNav] = useState<Boolean>(false)

  const hideNav = (): void => setToggleNav(false)

  return (
    <>
      <header>
        <h1>
          <Link to={'/'}>Planets</Link>
        </h1>
        <nav className="navbar">
          <Navigation isVisible={toggleNav} hideNav={hideNav} />
        </nav>
        <button
          className="navbar_toggle"
          onClick={() => setToggleNav((prev) => !prev)}
        ></button>
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
