# Youtube
https://www.youtube.com/watch?v=Fa4cRMaTDUI&list=PLWKjhJtqVAbnadueQ-C5keMQQiQau_i0D&ab_channel=freeCodeCamp.org

## Left Off
Part 2 @ 12

# Tech Stack
- NodeJS: 
  - ExpressJS, morgan, body-parser, joy, sequalize, cors, nodemon
- VueJS
  - vue-router, axios, vuetify
- sqlite3
- VSCode
  - Installed prettier extension for code formatting

# Notes
## Part 1
- Needed to use '@bundled-es-modules/axios' instead of axios due to transpilation of axios things by webpack
- Needed to create eslint.config.mjs in order for node things to be accepted by eslint

## Part 2
- Prettier keyboard shortcut: CTRL + SHIFT + |
- NodeJS will look for a index.js file by default when importing a directory
- Vuetify framework to build material design applications
- Vueitify required vueitfy instance to be passed into new Vue construction in main.ts and also required <v-app> element in the top level App.vue project. And then the styling worked.
