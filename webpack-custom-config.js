/*
 |--------------------------------------------------------------------------
 | Custom Webpack Config
 |--------------------------------------------------------------------------
 |
 */

let mix = require("laravel-mix");
let path = require("path");


mix.webpackConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/src')
        }
    }
});