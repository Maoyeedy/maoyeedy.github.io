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
            "properties-order": ["display", "position", "top", "right", "bottom", "left", "width", "height", "margin", "padding", "background", "background-color", "color"],
            'unspecified-properties-position': 'bottom',
        }),
    ],
};
