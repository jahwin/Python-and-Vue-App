let mix = require('laravel-mix');
mix
    .options({
        postCss: [
            require('autoprefixer'),
        ],
    })

mix.js(['src/main.js'], 'web/main.js').extract().setPublicPath('web');
mix.copyDirectory('src/assets', 'web/assets');