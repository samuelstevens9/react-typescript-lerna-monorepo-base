# truthlab frontend Monorepo

### Pre-Reqs
 * install [brew](https://brew.sh/)
 * install node & npm `$ brew install node` 
 * install [lerna](https://github.com/lerna/lerna)
    * optional install [lerna-wizard](https://github.com/szarouski/lerna-wizard)
 * install [create-react-app](https://github.com/facebook/create-react-app)
 * install [watchman](https://facebook.github.io/watchman/docs/install.html)

### Structure

 * `team-mgnt` - Single Page React TS App created via `create-react-app team-mgnt --scripts-version=react-scripts-ts`
 * `tsts` - React component in typescript that `team-mgnt` is dependednt on, created following [publishing-a-typescript-react-component-to-npm](https://medium.com/@jchiam/publishing-a-typescript-react-component-to-npm-d3cc15b8d0a2) 


### Commands

I think the order matters, at least I had the best luck with the following order: 

 1. `$ lerna bootstrap` - to link the packages, runs npm install in each, and allows you to reference them from each other
 2. `$ lerna link` - to link the packages
 3. `$ lerna run build` - builds all the packages for distribution



### Developing

 * `$ cd packages/<react-app-name>` - edit this single page React app as you normally would. 
   * to reference a peer project, include project `package.json` like you would as if it was on npm
   * `$ npm start` - to run the local dev server for the specific React app
   * `$ npm run watch` - to watch for changes and automatically run `npm run build`, use this inside component packages
     * `watchman-make -p 'src/*.*' 'src/**/*.*' --run 'npm run build'`
   


