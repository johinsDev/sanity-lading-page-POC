import '@assets/styles/main.css'
import client from 'client'
import type { AppProps } from 'next/app'

const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      "title": page->title
    },
    footerNavigation[] -> {
      ...,
      "title": page->title
    }
  }[0]
  `

export interface Page {
  _ref: string
  _type: string
}

export interface Slug {
  _type: string
  current: string
}

export interface Navigation {
  _createdAt: Date
  _id: string
  _rev: string
  _type: string
  _updatedAt: Date
  includeInSitemap: boolean
  page: Page
  slug: Slug
  title: string
}
export interface Frontpage {
  _ref: string
  _type: string
}

export interface GlobalConfig {
  logo?: {
    asset: {
      url: string
      extension: string
    }
  }
  mainNavigation: Navigation[]
  _createdAt: Date
  _id: string
  _rev: string
  _type: string
  _updatedAt: Date
  footerNavigation: any[]
  frontpage: Frontpage
  lang: string
  title: string
}

MyApp.getInitialProps = async (appContext: AppProps) => {
  const pageProps: { config?: GlobalConfig } = {}

  // if (appContext.Component.getInitialProps) {
  //   pageProps = await   const appProps = await App.getInitialProps(appContext)

  // }

  // Add site config from sanity
  return client.fetch(siteConfigQuery).then((config: GlobalConfig) => {
    if (!config) {
      return { pageProps }
    }
    if (config && pageProps) {
      pageProps.config = config
    }

    return { pageProps }
  })
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
