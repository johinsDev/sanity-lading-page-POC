// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
// Document types
import page from './documents/page'
import post from './documents/post'
import route from './documents/route'
import siteConfig from './documents/siteConfig'
// Object types
import cta from './objects/cta'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
// Landing page sections
import hero from './objects/hero'
import imageSection from './objects/imageSection'
import internalLink from './objects/internalLink'
import link from './objects/link'
import mailchimp from './objects/mailchimp'
import members from './objects/members'
import portableText from './objects/portableText'
import rowGrid from './objects/rowGrid'
import simplePortableText from './objects/simplePortableText'
import step from './objects/step'
import steps from './objects/steps'
import subStep from './objects/subStep'
import teamMember from './objects/teamMember'
import contactForm from './sections/contactForm'
import grid from './sections/grid'
import imageText from './sections/imageText'
import simpleForm from './sections/simpleForm'
import tab from './sections/tab'
import subTab from './sections/tab/objects/subTab'
import value from './sections/tab/objects/value'
import textSection from './sections/textSection'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    cta,
    embedHTML,
    figure,
    hero,
    imageSection,
    internalLink,
    link,
    mailchimp,
    page,
    portableText,
    route,
    simplePortableText,
    siteConfig,
    textSection,
    post,
    teamMember,
    members,
    steps,
    step,
    subStep,
    imageText,
    grid,
    tab,
    contactForm,
    simpleForm,
    rowGrid,
    subTab,
    value
  ])
})
