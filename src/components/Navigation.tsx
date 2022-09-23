import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <ul className="navbar_list">
      <li className="navbar_item skew-box">
        <NavLink
          to={'/mercury'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Mercury
        </NavLink>
      </li>
      <li className="navbar_item  skew-box">
        <NavLink
          to={'/venus'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Venus
        </NavLink>
      </li>
      <li className="navbar_item  skew-box">
        <NavLink
          to={'/earth'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Earth
        </NavLink>
      </li>
      <li className="navbar_item  skew-box">
        <NavLink
          to={'/mars'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Mars
        </NavLink>
      </li>
      <li className="navbar_item  skew-box">
        <NavLink
          to={'/jupiter'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Jupiter
        </NavLink>
      </li>
      <li className="navbar_item  skew-box">
        <NavLink
          to={'/saturn'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Saturn
        </NavLink>
      </li>
      <li className="navbar_item  skew-box">
        <NavLink
          to={'/uranus'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Uranus
        </NavLink>
      </li>
      <li className="navbar_item  skew-box">
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
