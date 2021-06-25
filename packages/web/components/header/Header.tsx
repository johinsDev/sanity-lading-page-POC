import SimpleBlockContent from '@components/SimpleBlockContent'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import cn from 'classnames'
import client from 'client'
import { useNextSanityImage } from 'next-sanity-image'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Frontpage } from 'pages/[[...slug]]'
import { GlobalConfig } from 'pages/_app'
import React, { FC } from 'react'
import SVG from 'react-inlinesvg'
import styles from './Header.module.css'

const renderLogo = (logo: GlobalConfig['logo']) => {
  if (!logo || !logo.asset) {
    return null
  }

  if (logo.asset.extension === 'svg') {
    return <SVG src={logo.asset.url} />
  }

  return (
    <Image
      src={logo.asset.url}
      alt="logo"
      width={200}
      height={53}
      layout="fixed"
    />
  )
}

function Hero({
  hero,
}: {
  hero: SanityImageSource & {
    alt?: string
    caption?: string
    asset?: any
  }
}) {
  const imageProps = useNextSanityImage(client, hero)

  return (
    <Image
      src={imageProps.src}
      loader={imageProps.loader}
      layout="fill"
      objectFit="cover"
      placeholder="blur"
      blurDataURL={imageProps.blurDataURL}
      alt={hero.alt}
    />
  )
}

const Header: FC<{ config?: GlobalConfig; page?: Frontpage }> = ({
  config,
  page,
}) => {
  const router = useRouter()

  return (
    <header
      className={cn('relative w-full h-[80vh] lg:h-screen', {
        'h-20': !page?.heroImage,
      })}
    >
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head>

      <div className="bg-bg-opacity-hero bg-no-repeat	bg-center bg-cover z-10 absolute flex flex-col items-center justify-center inset-0">
        <div className="absolute top-0 left-0 right-0 z-20 justify-between container mx-auto hidden md:flex">
          <h1>
            <Link href="/">
              <a
                title={config?.title}
                className="hover:border-none hover:bg-transparent border-none"
              >
                {renderLogo(config?.logo)}
              </a>
            </Link>
          </h1>

          <nav className="flex flex-1 justify-end">
            <ul className="flex space-x-8 items-center">
              {config?.mainNavigation.map((nav, index) => {
                const isActive =
                  router.pathname === '/[[...slug]]' &&
                  router.asPath === nav.slug.current

                return (
                  <li key={index + '_NAVIGATION_MAIN'}>
                    <Link
                      href={{
                        pathname: '/',
                        hash: 'tab',
                      }}
                      // href="/[[...slug]]"
                      // as={
                      //   nav.slug.current === '/' ? '/' : '/' + nav.slug.current
                      // }
                    >
                      <a
                        className={cn(
                          'text-white uppercase font-caslon text-lg hover:border-white hover:bg-transparent hover:border-l-0 hover:border-r-0 hover:border-t-0 border-b-2 border-transparent',
                          {
                            'border-white border-l-0 border-r-0 border-t-0 border-b':
                              isActive,
                          }
                        )}
                      >
                        {nav.title}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        {!!page?.heading && !!page?.heroImage && (
          <div className="w-full md:w-1/2">
            <h1>{page.heading}</h1>
          </div>
        )}

        {!!page?.heroImage && (
          <SimpleBlockContent
            className={cn(styles.description, 'mt-5 text-center')}
            blocks={page?.description}
          />
        )}
      </div>

      {!!page?.heroImage && <Hero hero={page.heroImage} />}
    </header>
  )
}

export default Header
