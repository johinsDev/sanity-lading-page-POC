export default {
  type: 'object',
  name: 'steps',
  title: 'Steps',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'subtitle'
    },
    {
      name: 'steps',
      type: 'array',
      title: 'Steps',
      of: [
        {
          title: 'Steps',
          type: 'step'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'heading'
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Step section'
      }
    }
  }
}
