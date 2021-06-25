export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata'
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
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
      name: 'heroImage',
      type: 'figure',
      title: 'Hero image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        {type: 'hero'},
        {type: 'members'},
        {type: 'steps'},
        {type: 'textSection'},
        {type: 'grid'},
        {type: 'contact'},
        // {type: 'simpleForm'},
        {type: 'tab'},
        {type: 'imageText'}
      ]
    },
    {
      name: 'descriptionMeta',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata'
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage'
    }
  }
}
