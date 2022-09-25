import Article from '../components/Article'
import { planets } from '../Model'

function Home() {
  return (
    <main>
      <Article content={planets[0]} />
    </main>
  )
}

export default Home
