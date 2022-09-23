import { useParams } from 'react-router-dom'

function Planet() {
  const { planet } = useParams()

  return (
    <main>
      <section className="content | flex">
        <aside className="content_image">
          <img src="assets/images/earth.jpg" alt={planet} />
        </aside>

        <article className="content_text-container">
          <h2 className="content_title">{planet}</h2>
          <p className="content_text">
            Earth is the third planet from the Sun and the only astronomical
            object known to harbor life. While large volumes of water can be
            found throughout the Solar System, only Earth sustains liquid
            surface water. About 71% of Earth's surface is made up of the ocean,
            dwarfing Earth's polar ice, lakes, and rivers.
          </p>
        </article>
      </section>
    </main>
  )
}

export default Planet
