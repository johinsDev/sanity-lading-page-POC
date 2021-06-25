export default {
  type: 'object',
  name: 'tab',
  title: 'Tab section info',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'options',
      type: 'array',
      title: 'Options List',
      of: [
        {
          type: 'subTab'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'heading'
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Tab section'
      }
    }
  }
}
