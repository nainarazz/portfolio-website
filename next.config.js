const nextOffline = require('next-offline');

// const nextConfig = {
//     workboxOpts: {
//         runtimeCaching: [
//             {
//                 urlPattern: /^https?.*/,
//                 handler: 'NetworkFirst',
//                 options: {
//                     cacheName: 'offlineCache',
//                     expiration: {
//                         maxEntries: 200,
//                     },
//                 },
//             },
//             {
//                 urlPattern: /.png$|.jpg$|.jpeg$|.gif$/,
//                 handler: 'CacheFirst',
//             },
//         ],
//     },
// };

module.exports = nextOffline();
