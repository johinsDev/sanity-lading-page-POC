import { Footer } from '@components/footer'
import { Header } from '@components/header'
import RenderSections, { Sections } from '@components/RenderSectionts'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import client from 'client'
import groq from 'groq'
import { GetStaticPropsContext } from 'next'
import React from 'react'
import { GlobalConfig } from './_app'
export interface Frontpage {
  _createdAt: Date
  _id: string
  _rev: string
  _type: string
  _updatedAt: Date
  content: Sections[]
  title: string
  heading: string
  description: any
  heroImage?: SanityImageSource
}

interface Response {
  page: Frontpage
}
interface DynamicPageProps extends Response {
  slug: string
  config: GlobalConfig
}

function DynamicPage(props: DynamicPageProps): JSX.Element {
  console.log(props)

  return (
    <>
      <Header config={props.config} page={props.page} />

      {!!props?.page?.content?.length && (
        <RenderSections sections={props.page.content} />
      )}

      <Footer />
    </>
  )
}

const pageQuery = groq`
*[_type == "route" && slug.current == $slug][0]{
  page-> {
    ...,
    content[] {
      ...,
      cta {
        ...,
        route->
      },
      ctas[] {
        ...,
        route->
      }
    }
  }
}
`

const allPages = groq`
*[_type == "route"]{
  page-> {
    ...,
    content[] {
      ...,
      cta {
        ...,
        route->
      },
      ctas[] {
        ...,
        route->
      }
    }
  }
}
`

// DynamicPage.getInitialProps = async ({
//   ...rest
// }: NextPageContext & { router: any }) => {
//   const slug = '/'

//   console.log(slug, rest)

//   if (slug && slug !== '/') {
//     return client
//       .fetch(pageQuery, { slug })
//       .then((res: Response) => {
//         return { ...res, slug }
//       })
//       .catch(() => {
//         return {}
//       })
//   }

//   if (slug && slug === '/') {
//     return client
//       .fetch(
//         groq`
//           *[_id == "global-config"][0]{
//             frontpage -> {
//               ...,
//               content[] {
//                 ...,
//                 cta {
//                   ...,
//                   route->
//                 },
//                 ctas[] {
//                   ...,
//                   route->
//                 }
//               }
//             }
//           }
//         `
//       )
//       .then((res: Response) => {
//         return { ...res, slug }
//       })
//       .catch(() => {
//         return {}
//       })
//   }

//   return {}
// }

export default DynamicPage

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const { params, preview = null } = context

    const pageData: Response = await client.fetch(pageQuery, {
      slug: !params?.slug ? '/' : (params.slug as string[]).pop(),
    })

    if (pageData == null) {
      return { props: {} }
    }

    return {
      props: {
        preview,
        page: pageData.page,
      },
    }
  } catch (error) {
    console.log('ERROR', error)

    return { props: {} }
  }
}

export async function getStaticPaths() {
  await client.fetch(allPages)

  const paths = [
    {
      params: { slug: false },
    },
    {
      params: { slug: ['jobs'] },
    },
  ]

  return { paths, fallback: true }
}
