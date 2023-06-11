module.exports = {
    plugins: [
        require('autoprefixer'),
        // require('cssnano')({
        //     preset: 'default',
        // }),
        require('postcss-sorting')({
            order: [
                'custom-properties',
                'dollar-variables',
                'declarations',
                'at-rules',
                'rules',
            ],
            'properties-order': 'alphabetical',
            'unspecified-properties-position': 'bottom',
        }),
    ],
};
