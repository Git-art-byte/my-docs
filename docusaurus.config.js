/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Docs',
  tagline: 'Clean docs like sirius.menu',
  url: 'https://your-vercel-domain.vercel.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'my-org',
  projectName: 'my-docusaurus-docs',
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve docs at site's root
        },
        blog: false, // Optional: disable blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};

module.exports = config;
