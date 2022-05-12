import type { InferGetStaticPropsType } from 'next'
import { routes } from '../../routes'

export async function getStaticPaths() {
    return {
      // uncomment line below to fix the issue
      // paths: routes.map(routeName => ({ params: { routeName: encodeURIComponent(routeName) } })),
      paths: routes.map(routeName => ({ params: { routeName } })),
      fallback: 'blocking'
    };
}

export async function getStaticProps({ params }: {params: {routeName: string}}) {
    return {
      props: { routeName: params.routeName },
    }
  }

const Nested = ({ routeName }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main>
        <h1>Details page</h1>
        <div>
            {routeName}
        </div>
    </main>
  )
}

export default Nested