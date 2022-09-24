import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Planet as PlanetType, planets } from '../Model'

function Planet() {
  const { planet } = useParams()
  const [planetData, setPlanetData] = useState<PlanetType>()

  useEffect(() => {
    setPlanetData((prev) => planets.find((p) => p.name === planet))
  }, [planet])

  return (
    <main>
      <section className="content | flex">
        <aside className="content_image">
          <img src={planetData?.img} alt={planet} />
        </aside>

        <article className="content_text-container">
          <h2 className="content_title">{planetData?.name}</h2>
          <p className="content_text">{planetData?.desc}</p>
        </article>
      </section>

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
