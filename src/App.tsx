import { useState } from 'react'
import { Outlet, Link, useParams, useNavigate } from 'react-router-dom'

import Navigation from './components/Navigation'

import { getTranslate } from './LangData'

import './scss/style.scss'

function App() {
  const [toggleNav, setToggleNav] = useState<Boolean>(false)
  const { lang } = useParams()
  const navigate = useNavigate()

  const hideNav = (): void => setToggleNav(false)

  console.log(lang)

  const handleLangChange = (event: any) => {
    const lang = event.target.value
    if (lang !== 'en') {
      navigate(`/lang/${lang}`)
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <header className="flex">
        <h1>
          <Link to={lang ? `/lang/${lang}/` : '/'}>
            {getTranslate(lang, 'Planets')}
          </Link>
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

      <footer className="flex">
        <div className="language | skew-box">
          <select
            name="lan"
            id="lang"
            onChange={handleLangChange}
            defaultValue={lang ? lang : 'en'}
          >
            <option value="en">English</option>
            <option value="bs">Bosanski</option>
          </select>
        </div>
        <div className="photo-by | skew-box">
          <p>
            {`${getTranslate(lang, 'Photo by')}: `}
            <a href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              NASA
            </a>{' '}
            {`${getTranslate(lang, 'on')}: `}
            <a href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
