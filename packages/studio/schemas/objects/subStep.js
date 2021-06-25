export default {
  type: 'object',
  name: 'subStep',
  title: 'SubStep',
  fields: [
    {
      name: 'stepName',
      type: 'string',
      title: 'Step Name'
    },
    {
      title: 'Icon',
      description: 'Best choice is to use an SVG where the color are set with currentColor',
      name: 'icon',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          options: {
            isHighlighted: true
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'stepName'
    },
    prepare ({title, media}) {
      return {
        title,
        subtitle: 'SubStep section'
      }
    }
  }
}
