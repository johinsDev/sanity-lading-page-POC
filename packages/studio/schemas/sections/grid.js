export default {
  type: 'object',
  name: 'grid',
  title: 'Grid with image and text',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images,
                be they blind, color-blind, low-sighted;
                alternative text is of great help for those
                people that can rely on it to have a good idea of
                what\'s on your page.`,
              options: {
                isHighlighted: true
              }
            }
          ]
        }
      ]
    },
    {
      name: 'backgroundColor',
      title: 'Background color',
      type: 'color'
    },
    {
      name: 'grids',
      type: 'array',
      title: 'Add rows',
      description: 'Image or text per row',
      of: [
        {
          type: 'rowGrid'
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
        subtitle: 'Grid section'
      }
    }
  }
}
