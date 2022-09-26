import { Link, useParams } from 'react-router-dom'
import { getPlanets } from '../Model'

function Home() {
  const { lang } = useParams()

  return (
    <main>
      <ul className="card-list | mt-2">
        {getPlanets(lang).map(({ id, name, img }) => (
          <li key={name} className={`card | b-shadow planet-${name}`}>
            <Link to={lang ? `/lang/${lang}/${id}` : `/${id}`} className="flex">
              <div className="card_image">
                <img src={img} alt={name} className="image-cover" />
              </div>

              <div className="card_body">
                <h2 className="card_title">{name}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home
