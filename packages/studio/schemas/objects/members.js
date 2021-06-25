export default {
  type: 'object',
  name: 'members',
  title: 'Members',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'description',
      type: 'simplePortableText',
      title: 'Description'
    },
    {
      name: 'members',
      type: 'array',
      title: 'Members',
      of: [
        {
          title: 'Members',
          type: 'teamMember'
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
        subtitle: 'Member section'
      }
    }
  }
}
