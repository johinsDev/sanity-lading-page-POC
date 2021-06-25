import { Cta } from '@components/RenderSectionts'
import Link from 'next/link'
import React, { FC } from 'react'
// import { Cta } from './RenderSections'

const cta: FC<Cta & { className?: string }> = (props) => {
  const { title, route, link } = props

  if (route && route.slug && route.slug.current) {
    return (
      <Link
        href={{
          pathname: '/' + route.slug.current,
        }}
      >
        <a className={props.className}>{title}</a>
      </Link>
    )
  }

  if (link) {
    return (
      <a className={props.className} href={link}>
        {title}
      </a>
    )
  }

  return <a className={props.className}>{title}</a>
}

export default cta
