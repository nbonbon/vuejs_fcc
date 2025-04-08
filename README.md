# Youtube
https://www.youtube.com/watch?v=Fa4cRMaTDUI&list=PLWKjhJtqVAbnadueQ-C5keMQQiQau_i0D&ab_channel=freeCodeCamp.org

# Github
https://github.com/codyseibert/tab-tracker/

## Left Off
Part 6 @ 14'

# Tech Stack
- NodeJS: 
  - ExpressJS, morgan, body-parser, joy, sequalize, cors, nodemon, jsonwebtokens, bcryptjs
- VueJS
  - vue-router, axios, vuetify, vuex
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
- v-btn text property made button appear within toolbar and not "elevated"

## Part 3
- Newer versions of bcrypt don't require promisifying using bluebird
- beforeSave is called before beforeCreate and beforeUpdate which was causing redundant and duplicated hashing of the password and failing to be able to login
- Vuex = state management pattern / library for larger Vue applications that enabled components to talk to each other
  - Pinia is a more modern / recommended approach now

## Part 5
- Accidentally saved full youtube URL under the youtubeId column in DB which was causing youtube video to not load

## Part 6
- Had to use $router.replace instead of $router.push as in the video. $router.push was redirecting whereas $router.replace does not.
- The handler for loading the search param during page load did not work either (I may have forgot outter watch, because this worked in SongsPanel) did this instead:
  ```
  data () {
      return {
        search: this.$route.query.search || ''
      }
    }
  ```
  - Sequalize no longer has %like and now has Op. So the NodeJS search code in songs-controller.index() is different.
