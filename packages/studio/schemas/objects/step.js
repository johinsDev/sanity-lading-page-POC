export default {
  type: 'object',
  name: 'step',
  title: 'Step',
  fields: [
    {
      name: 'stepName',
      type: 'string',
      title: 'Step Name'
    },
    {
      name: 'steps',
      type: 'array',
      title: 'SubSteps',
      of: [
        {
          title: 'SubSteps',
          type: 'subStep'
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
        subtitle: 'Step section'
      }
    }
  }
}
