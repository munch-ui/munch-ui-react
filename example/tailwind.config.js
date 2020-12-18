module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['NunitoSans'],
                semibold: ['NunitoSans-Bold']
            },
            spacing: {
                100: '25rem',
                120: '30rem'
            },
            colors: {
                primary: {
                    100: '#cccfef',
                    200: '#99a0df',
                    300: '#6670ce',
                    400: '#3341be',
                    500: '#0011ae',
                    600: '#000e8b',
                    700: '#000a68',
                    800: '#000746',
                    900: '#000323'
                }
            }
        }
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
            boxShadow: ['active']
        }
    },
    plugins: []
};
