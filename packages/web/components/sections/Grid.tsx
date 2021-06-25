import { SectionGrid } from '@components/RenderSectionts'
import SimpleBlockContent from '@components/SimpleBlockContent'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import cn from 'classnames'
import client from 'client'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import { FC } from 'react'

function ImageRow({ node }: { node: SanityImageSource & { alt?: string } }) {
  const imageProps = useNextSanityImage(client, node)

  return (
    <Image
      src={imageProps.src}
      loader={imageProps.loader}
      blurDataURL={imageProps.blurDataURL}
      layout="fill"
      alt={node.alt}
      objectFit="cover"
      placeholder="blur"
    />
  )
}

const GridSection: FC<SectionGrid> = ({ heading, backgroundColor, grids }) => {
  return (
    <section
      className="pb-0 bg-white px-0"
      style={{
        backgroundColor: backgroundColor?.hex,
      }}
    >
      <h2>{heading}</h2>

      <div className="grid grid-cols-1 mt-12">
        {grids?.map((grid, index) => {
          const isLeft = grid.imagePosition === 'left'

          return (
            <div
              key={`SECTION_GRID_ROW_${index}`}
              className={cn('flex', {
                'flex-row-reverse': isLeft,
              })}
            >
              <div
                className="py-20 flex-1"
                style={{
                  backgroundColor: grid.backgroundColor?.hex,
                }}
              >
                <div className="w-full px-8 lg:px-0 lg:w-2/4 mx-auto">
                  <h3 className="text-left">{grid.heading}</h3>

                  <SimpleBlockContent
                    blocks={grid.description}
                    className="mt-10 text-left"
                  />
                </div>
              </div>
              <div className="relative flex-1 hidden md:flex">
                <ImageRow node={grid.image} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default GridSection
