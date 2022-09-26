import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getColors, getPlanetsNames } from '../Model'

type Props = {
  isVisible: Boolean
  hideNav: () => void
}

function Navigation({ isVisible, hideNav }: Props) {
  const { planet, lang } = useParams()

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--clr-primary',
      `var(${getColors(planet)})`
    )
    hideNav()
  }, [planet])

  return (
    <ul className={`navbar_list ${isVisible ? 'show' : ''}`}>
      {getPlanetsNames(lang).map((planet) => (
        <li
          className="navbar_item | skew-box b-shadow hover-navigation"
          key={planet.id}
        >
          <NavLink
            to={lang ? `/lang/${lang}/${planet.id}` : `/${planet.id}`}
            className={({ isActive }) =>
              `navbar_link${isActive ? ' active' : ''}`
            }
          >
            {planet.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
