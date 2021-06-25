// eslint-disable-next-line @typescript-eslint/no-var-requires
const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  projectId: 's988nnlq',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: '', // or leave blank to be anonymous user
  useCdn: process.env.NODE_ENV === 'production',
})
