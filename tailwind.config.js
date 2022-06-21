module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    purge: [],
    // darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            '2xl': { max: '1535px' },
            // => @media (max-width: 1535px) { ... }
            xl: { max: '1279px' },
            // => @media (max-width: 1279px) { ... }
            lg: { max: '1023px' },
            // => @media (max-width: 1023px) { ... }
            md2: { min: '767px' },
            // => @media (min-width: 767px) { ... }
            maxmd: { min: '767px' },
            // => @media (min-width: 1023px) { ... }
            minmd: { max: '768px' },
            // => @media (max-width: 767px) { ... }
            sm: { max: '639px' },
            // => @media (max-width: 639px) { ... }
        },
        extend: {
            backgroundImage: {
                'login-img': "url('~/static/login-img/bg-login.jpg')",
            },
            keyframes: {
                validateLogin: {
                    '0%': { transform: 'translateY(-50%)' },
                    '50%': { transform: 'translateY(-20%)' },
                    '100%': { transform: 'translateY(0%)' },
                },
                changeForm: {
                    '0%': { transform: 'translateX(100%)' },
                    '50%': { transform: 'translateX(50%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
            },
            animation: {
                validateLogin: 'validateLogin',
                changeForm: 'changeForm',
            },
        },

    },
    variants: {
        extend: {},
    },
    plugins: [],
};
