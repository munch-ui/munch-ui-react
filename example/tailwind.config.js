module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['NunitoSans'],
                semibold: ['NunitoSans-Bold']
            },
            colors: {
                primary: '#0011ae',
                warning: '#ff9800',
                danger: '#f44336'
            }
        }
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
            opacity: ['active'],
            boxShadow: ['active'],
            textColor: ['active']
        }
    },
    plugins: []
};
