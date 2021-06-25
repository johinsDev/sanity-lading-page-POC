import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import React from 'react'
import ContactForm from './sections/ContactForm'
import GridSection from './sections/Grid'
import ImageTextSection from './sections/ImageText'
import MembersSection from './sections/Members'
import SimpleFormSection from './sections/SimpleForm'
// import { Members } from './sections'
// import Hero from './sections/Hero'
import StepsSection from './sections/Steps'
import TabsSection from './sections/Tabs'
import TextSection from './sections/Text'

export type SectionTypes =
  | 'textSection'
  | 'steps'
  | 'members'
  | 'imageText'
  | 'grid'
  | 'tab'
  | 'contact'
  | 'simpleForm'

export interface BaseSection {
  _type: SectionTypes
  _key: string
}

export interface Member {
  image: SanityImageSource
  email: string
  name: string
  role: string
  phone: string
  _key: string
  _type: 'teamMember'
  description: any
}

export interface SectionMember extends BaseSection {
  heading: string
  members: Member[]
  description: any
}

export interface SectionText extends BaseSection {
  heading: string
  ctas: Cta[]
  text: any
  backgroundColor: {
    hex: string
  }
}

export interface SectionImageText extends BaseSection {
  heading: string
  imagePosition: 'left' | 'right'
  ctas: Cta[]
  image: SanityImageSource & { alt?: string }
  description: any
  backgroundColor: {
    hex: string
  }
}

interface Value {
  label: string
  value: string
}

interface Option {
  heading: string
  values: Value[]
}
export interface SectionTabs extends BaseSection {
  heading: string
  options: Option[]
}

export interface Grid {
  heading: string
  description: any
  backgroundColor: {
    hex: string
  }
  imagePosition: 'left' | 'right'
  image: SanityImageSource & { alt?: string }
}
export interface SectionGrid extends BaseSection {
  heading: string
  description?: any
  backgroundColor?: {
    hex: string
  }
  grids?: Grid[]
}

export interface Cta {
  title: string
  _key: string
  _type: 'cta'
  link?: string
  route?: {
    slug: {
      current: string
    }
  }
}

export interface SectionHero extends BaseSection {
  heading: string
  backgroundImage: SanityImageSource
  ctas: Cta[]
}

type SubStep = {
  stepName: string
  icon: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
}

interface Step {
  stepName: string
  steps: SubStep[]
  _key: string
}

export interface SectionStep extends BaseSection {
  heading: string
  subtitle: string
  steps: Step[]
}

export type Sections = SectionMember | SectionHero | SectionText

const SectionComponents: { [key in SectionTypes]: React.ElementType } = {
  members: MembersSection,
  // hero: Hero,
  grid: GridSection,
  textSection: TextSection,
  steps: StepsSection,
  imageText: ImageTextSection,
  tab: TabsSection,
  contact: ContactForm,
  simpleForm: SimpleFormSection,
}

function resolveSections(section: BaseSection) {
  const Section = SectionComponents[section._type]

  if (Section) {
    return Section
  }

  return null
}

function RenderSections({
  sections,
}: {
  sections: Sections[]
}): React.ReactElement {
  if (!sections) {
    console.error('Missing section')
    return <div>Missing sections</div>
  }

  return (
    <>
      {sections.map((section, index) => {
        const SectionComponent = resolveSections(section)

        if (!SectionComponent) {
          return <div />
        }

        return <SectionComponent {...section} key={'DYNAMIC_SECTION' + index} />
      })}
    </>
  )
}

export default RenderSections
