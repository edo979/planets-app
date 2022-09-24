import { Outlet, Link } from 'react-router-dom'
import Navigation from './components/Navigation'
import './scss/style.scss'

const planets = [
  {
    name: 'mercury',
    desc: `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.`,
    data: [
      ['Distance from Sun', '58 million km'],
      ['Radius', '2,439.7 km'],
      ['Mass', '3.285 × 10^23 kg (0.055 M⊕)'],
      ['Surface area', '74.8 million km²'],
    ],
  },
]

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
