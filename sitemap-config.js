const sitemap = require('nextjs-sitemap-generator');
sitemap({
    baseUrl: 'https://nainacodes.com',
    pagesDirectory: __dirname + '/pages',
    targetDirectory: '/',
    ignoredExtensions: ['png', 'jpg', 'gif'],
});
