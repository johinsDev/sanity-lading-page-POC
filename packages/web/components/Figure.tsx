import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { useNextSanityImage } from 'next-sanity-image'
import Img from 'next/image'
import client from '../client'

type Figure = {
  node: SanityImageSource & {
    alt?: string
    caption?: string
    asset?: any
  }
}

function Figure({ node, ...rest }: Figure): JSX.Element {
  const { alt, caption, asset } = node

  const imageProps = useNextSanityImage(client, node)

  if (!asset) {
    return <div />
  }

  return (
    <figure>
      <Img {...imageProps} {...rest} alt={alt} />

      {caption && (
        <figcaption>
          <div>
            <div>
              <p>{caption}</p>
            </div>
          </div>
        </figcaption>
      )}
    </figure>
  )
}

export default Figure
