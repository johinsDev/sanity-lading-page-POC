export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60c0d15437da930e3a3434d9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ry17fjzv',
                  apiId: '7f2ce9ef-7a6a-4667-9d7e-77668139d9d3'
                },
                {
                  buildHookId: '60c0d15437da930e3a3434d8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-arn11qk5',
                  apiId: '9b02ef76-a0dc-44a0-9dfb-f4695412f53b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/johinsDev/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-arn11qk5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
