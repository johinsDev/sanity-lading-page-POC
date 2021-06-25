import { Cta } from '@components/cta'
import MemoBgWhite from '@components/icons/BgWhite'
import { SectionImageText } from '@components/RenderSectionts'
import SimpleBlockContent from '@components/SimpleBlockContent'
import cn from 'classnames'
import client from 'client'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import { FC } from 'react'

const ImageTextSection: FC<SectionImageText> = ({
  heading,
  ctas,
  backgroundColor,
  image,
  imagePosition,
  description,
}) => {
  const imageProps = useNextSanityImage(client, image)

  const isLeft = imagePosition === 'left'

  return (
    <section
      className="bg-pink relative"
      style={{
        backgroundColor: backgroundColor?.hex,
      }}
    >
      <div
        className={cn(
          'container mx-auto flex flex-col items-center md:flex-row',
          {
            'md:!flex-row-reverse !flex-col-reverse': !isLeft,
          }
        )}
      >
        <div
          className={cn('flex-1 flex', {
            'justify-end md:mr-20': isLeft,
            'mt-8 md:mt-0 md:ml-20': !isLeft,
          })}
        >
          <Image {...imageProps} alt={image.alt} />
        </div>

        <div
          className={cn(
            'flex-1 text-center z-20 flex flex-col md:mt-0 md:px-0 md:text-left',
            {
              'items-end': !isLeft,
              'mt-8 md:mt-0': isLeft,
            }
          )}
        >
          <h3 className="text-center w/full md:text-left md:w-3/4">
            {heading}
          </h3>

          <SimpleBlockContent
            blocks={description}
            className="mt-7 w-full md:w-3/4"
          />

          <div className="flex items-center w-full justify-center mt-7 md:justify-start md:w-3/4">
            {ctas.map((cta, index) => {
              return <Cta {...cta} key={`CTA_SECTION_IMAGE_TEXT_${index}`} />
            })}
          </div>
        </div>

        <MemoBgWhite className="absolute right-0 z-10 hidden xl:block" />
      </div>
    </section>
  )
}

export default ImageTextSection
