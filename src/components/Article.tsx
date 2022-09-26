import { Planet as PlanetType } from '../Model'

type Props = {
  content: PlanetType | undefined
}

function Article({ content }: Props) {
  return (
    <section className="content | flex">
      <aside className="content_image">
        <img src={content?.img} alt={content?.name} className="image-cover" />
      </aside>

      <article className="content_text-container">
        <h2 className="content_title">{content?.nameTranslate}</h2>
        <p className="content_text">{content?.desc}</p>
      </article>
    </section>
  )
}

export default Article
