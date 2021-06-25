export default {
  name: 'rowGrid',
  title: 'Row Grid',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'backgroundColor',
      title: 'Background color',
      type: 'color'
    },
    {
      name: 'imagePosition',
      type: 'string',
      title: 'Image Position',
      options: {
        list: ['left', 'right']
      },
      initialValue: 'left'
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
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image'
    },
    prepare({ title, media }) {
      return {
        title,
        media
      }
    }
  }
}
