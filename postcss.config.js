module.exports = {
    plugins: [
        require('autoprefixer'),
        // require('cssnano')({
        //     preset: 'default',
        // }),
        require('postcss-sorting')({
            order: [
                "custom-properties",
                "dollar-variables",
                "declarations",
                "at-rules",
                "rules"
            ],
            "properties-order": ["display", "position", "top", "bottom", "left", "right", "width", "height", "margin", "margin-top", "margin-bottom", "margin-left", "margin-right", "padding", "padding-top", "padding-bottom", "padding-left", "padding-right", "background", "background-color", "color", "font-family", "font-size", "font-weight", "font-style"],
            'unspecified-properties-position': 'bottom',
        }),
    ],
};
