export default {
  type: 'object',
  name: 'teamMember',
  title: 'Member',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'description',
      type: 'simplePortableText',
      title: 'Description'
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone'
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  },
  prepare({ title, media }) {
    return {
      title: `${title}`,
      subtitle: 'Member section',
      media
    }
  }
}
