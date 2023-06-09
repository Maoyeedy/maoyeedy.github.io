module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
        }),
        // require('@fullhuman/postcss-purgecss')({
        //     content: ['./index.html']
        // })
    ],
};
