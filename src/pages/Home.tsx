import { Link } from 'react-router-dom'
import { planets } from '../Model'

function Home() {
  return (
    <main>
      <ul className="card-list | mt-2">
        {planets.map(({ name, img }) => (
          <li key={name} className={`card | b-shadow planet_${name}`}>
            <Link to={`/${name}`} className="flex">
              <div className="card_image">
                <img src={img} alt={name} />
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
