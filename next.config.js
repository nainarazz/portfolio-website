const nextOffline = require('next-offline');

const nextConfig = {
    workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [
            {
                urlPattern: /^https?.*/,
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'offlineCache',
                    expiration: {
                        maxEntries: 200,
                    },
                },
            },
            {
                urlPattern: /.png$|.jpg$|.jpeg$|.gif$/,
                handler: 'CacheFirst',
            },
            {
                urlPattern: /api/,
                handler: 'NetworkFirst',
                options: {
                    cacheableResponse: {
                        statuses: [0, 200],
                    },
                },
            },
        ],
    }
};

module.exports = nextOffline(nextConfig);
