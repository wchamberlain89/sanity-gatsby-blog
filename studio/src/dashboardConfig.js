export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '60091fb4683f84624b56d12f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6ei5buox',
                  apiId: 'b1c45077-8c3e-4510-a4c0-a0396b9fabfb'
                },
                {
                  buildHookId: '60091fb404e46f6082f58971',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-adhjvf9u',
                  apiId: '4fd9dffa-5ff7-48b8-b835-384d77b1046b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wchamberlain89/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-adhjvf9u.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
