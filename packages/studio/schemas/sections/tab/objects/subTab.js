export default {
  type: 'object',
  name: 'subTab',
  title: 'Sub Tab section info',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'values',
      type: 'array',
      title: 'Values',
      of: [
        {
          type: 'value'
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
