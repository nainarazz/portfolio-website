const sitemap = require('nextjs-sitemap-generator');
sitemap({
    baseUrl: 'https://nainacodes.com',
    pagesDirectory: __dirname + '/src/pages',
    targetDirectory: __dirname + '/public',
    ignoredExtensions: ['png', 'jpg', 'gif'],
});
