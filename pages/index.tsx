import type { NextPage } from 'next'
import Link from 'next/link'
import { routes } from '../routes'

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <h1>Home page</h1>
        <div>
          {routes.map(route => 
            <Link key={route} href={`/details/${route}`}>
              <a>{route} - click me</a>
            </Link>
          )}
        </div>
      </main>
    </div>
  )
}

export default Home
