import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getColors, getPlanetName } from '../Model'

type Props = {
  isVisible: Boolean
  hideNav: () => void
}

function Navigation({ isVisible, hideNav }: Props) {
  const { planet, lang } = useParams()
  const [linkPrefix, setLinkPrefix] = useState<string | undefined>('')

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--clr-primary',
      `var(${getColors(planet)})`
    )
    hideNav()
  }, [planet])

  useEffect(() => {
    setLinkPrefix((prev) => (lang ? `/lang/${lang}` : ''))
  }, [lang])

  return (
    <ul className={`navbar_list ${isVisible ? 'show' : ''}`}>
      <li className="navbar_item | skew-box b-shadow hover-navigation">
        <NavLink
          to={linkPrefix + '/mercury'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          {getPlanetName(planet, lang)}
        </NavLink>
      </li>
      <li className="navbar_item | skew-box b-shadow hover-navigation">
        <NavLink
          to={'/venus'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Venus
        </NavLink>
      </li>
      <li className="navbar_item | skew-box b-shadow hover-navigation">
        <NavLink
          to={'/earth'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Earth
        </NavLink>
      </li>
      <li className="navbar_item | skew-box b-shadow hover-navigation">
        <NavLink
          to={'/mars'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Mars
        </NavLink>
      </li>
      <li className="navbar_item | skew-box b-shadow hover-navigation">
        <NavLink
          to={'/jupiter'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Jupiter
        </NavLink>
      </li>
      <li className="navbar_item | skew-box b-shadow hover-navigation">
        <NavLink
          to={'/saturn'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Saturn
        </NavLink>
      </li>
      <li className="navbar_item | skew-box b-shadow hover-navigation">
        <NavLink
          to={'/uranus'}
          className={({ isActive }) =>
            `navbar_link${isActive ? ' active' : ''}`
          }
        >
          Uranus
        </NavLink>
      </li>
      <li className="navbar_item | skew-box b-shadow hover-navigation">
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
