export default {
  type: 'object',
  name: 'simpleForm',
  title: 'Simple form section info',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    }
  ],
  preview: {
    select: {
      title: 'heading'
    },
    prepare ({title, media}) {
      return {
        title,
        subtitle: 'Contact form section'
      }
    }
  }
}
