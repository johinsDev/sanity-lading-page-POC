export default {
  type: 'object',
  name: 'value',
  title: 'Label And Value',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label'
    },
    {
      name: 'value',
      type: 'string',
      title: 'Value'
    }
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'value'
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle
      }
    }
  }
}
