import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Article from '../components/Article'
import { Planet as PlanetType, getPlanets } from '../Model'

function Planet() {
  const { planet, lang } = useParams()
  const [planetData, setPlanetData] = useState<PlanetType>()

  useEffect(() => {
    setPlanetData((prev) => getPlanets(lang).find((p) => p.id === planet))
  }, [planet, lang])

  return (
    <main>
      <Article content={planetData} />

      <section className="boxes | flex mt-1">
        {planetData?.data.map((data) => (
          <div className="box | skew-box b-shadow" key={data[0]}>
            <h3>{data[0]}:</h3>
            <p>{data[1]}</p>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Planet
