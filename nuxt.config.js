require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

export default {
    dev: !isProduction,

    // When SPA
    loading: '@/components/shared/Loading.vue',

    // When SSR
    loadingIndicator: {
        name: 'folding-cube',
        color: '#336CCE',
    },

    head: {
        title: 'nuxt-boilerplate',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css' },

        ],
    },

    css: [
        '@/assets/main.scss',
        '@fortawesome/fontawesome-free/css/all.css',
        'ant-design-vue/dist/antd.css',
    ],

    plugins: [
        '@/plugins/element-ui',
        '@/plugins/filters',
        '@/plugins/antd-ui',
    ],

    robots: [
        {
            UserAgent: '*',
            Disallow: process.env.APP_ENV === 'production'
                ? [
                    '/*.json',
                    '/*.xml',
                ]
                : '/',
        },
    ],

    server: {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || '3000',
    },

    render: {
        http2: {
            push: true,
        },
    },

    buildModules: [
        '@nuxt/postcss8',
        '@nuxtjs/eslint-module',
        '@nuxtjs/fontawesome',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-analytics',
    ],

    modules: [
        '@nuxtjs-extra/ant-design-vue',
        [
            '@nuxtjs-extra/ant-design-vue',
            {
                style: 'css', // available options: 'css', 'less'
                useDayJs: false, // replace moment.js with day.js internally within 'ant-design-vue' for reducing package size
            },
        ],
        '@nuxtjs/tailwindcss',
    ],

    build: {
        transpile: [/^element-ui/],
        postcss: {
            plugins: {
                tailwindcss: 'tailwind.config.js',
                autoprefixer: {},
            },
        },
        loaders: {
            sass: {
                implementation: require('sass'),
            },
            scss: {
                implementation: require('sass'),
            },
        },
        extend(config) {
            config.resolve.alias.vue = 'vue/dist/vue.common';
        },
    },

    publicRuntimeConfig: {
        googleAnalytics: {
            id: process.env.GOOGLE_ANALYTICS_ID,
        },
    },
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL:
        process.env.BASE_API_URL || 'https://flextext-f544f-default-rtdb.firebaseio.com',
    },

    env: {
        apiHost: process.env.API_HOST || 'localhost',
        apiPath: process.env.API_PATH || '/api',
        appUrl: process.env.APP_URL || 'http://localhost:3000',
        baseApiUrl: process.env.BASE_API_URL || 'https://flextext-f544f-default-rtdb.firebaseio.com',

    },
};
