const mix = require("laravel-mix");

const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project
    content: [
      './resources/**/*.blade.php',
      './resources/**/*.vue',
    ],

    // This is the function used to extract class names from your templates
    defaultExtractor: content => {
      // Capture as liberally as possible, including things like `h-(screen-1.5)`
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

      // Capture classes within other delimiters like .block(class="w-1/2") in Pug
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

      return broadMatches.concat(innerMatches)
    }

    // defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  })

mix.js("resources/js/app.js", "public/js")
.postCss("resources/css/app.css","public/css",[
    require('tailwindcss'),
    ... mix.inProduction() ? [purgecss] : [],
    require('autoprefixer'),
]);

mix.webpackConfig({
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "resources/js/components")
        }
    }
});

mix.disableSuccessNotifications();

if (mix.inProduction()) {
    mix.version();
} else {
    mix.sourceMaps();
}
