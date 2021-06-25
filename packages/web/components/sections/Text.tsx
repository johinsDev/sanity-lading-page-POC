import Cta from '@components/cta/Cta'
import { SectionText } from '@components/RenderSectionts'
import SimpleBlockContent from '@components/SimpleBlockContent'
import { FC } from 'react'

const TextSection: FC<SectionText> = ({
  heading,
  text,
  ctas,
  backgroundColor,
}) => {
  return (
    <section
      className="bg-white"
      style={{
        backgroundColor: backgroundColor?.hex,
      }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="px-4">{heading}</h2>

        <SimpleBlockContent
          blocks={text}
          className="mt-11 px-8 w-full xl::w-3/4 xl:px-0"
        />

        <div className="flex space-x-8 mt-8">
          {ctas.map((cta, index) => (
            <Cta {...cta} key={'CTA_TEXT_SECTION' + index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TextSection
