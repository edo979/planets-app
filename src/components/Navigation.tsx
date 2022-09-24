import { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getColors } from '../Model'

function Navigation() {
  const { planet } = useParams()

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--clr-primary',
      `var(${getColors(planet)})`
    )
  }, [planet])

  return (
    <ul className="navbar_list">
      <li className="navbar_item | skew-box b-shadow">
        <NavLink
          to={'/mercury'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Mercury
        </NavLink>
      </li>
      <li className="navbar_item | skew-box b-shadow">
        <NavLink
          to={'/venus'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Venus
        </NavLink>
      </li>
      <li className="navbar_item | skew-box b-shadow">
        <NavLink
          to={'/earth'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Earth
        </NavLink>
      </li>
      <li className="navbar_item | skew-box b-shadow">
        <NavLink
          to={'/mars'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Mars
        </NavLink>
      </li>
      <li className="navbar_item | skew-box b-shadow">
        <NavLink
          to={'/jupiter'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Jupiter
        </NavLink>
      </li>
      <li className="navbar_item | skew-box b-shadow">
        <NavLink
          to={'/saturn'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Saturn
        </NavLink>
      </li>
      <li className="navbar_item | skew-box b-shadow">
        <NavLink
          to={'/uranus'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Uranus
        </NavLink>
      </li>
      <li className="navbar_item | skew-box b-shadow">
        <NavLink
          to={'/neptune'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Neptune
        </NavLink>
      </li>
    </ul>
  )
}

export default Navigation
