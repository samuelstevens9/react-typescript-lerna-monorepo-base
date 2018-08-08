# truthlab frontend Monorepo

### Pre-Reqs
 * install [brew](https://brew.sh/)
 * install node & npm `$ brew install node` 
 * install [lerna](https://lernajs.io/)
    * optional install [lerna-wizard](https://github.com/szarouski/lerna-wizard)
 * install [create-react-app](https://github.com/facebook/create-react-app)
 * install [watchman](https://facebook.github.io/watchman/docs/install.html)

### Structure

 * `team-mgnt` - Single Page React TS App created via `create-react-app team-mgnt --scripts-version=react-scripts-ts`
 * `truthlab-uiux` - React component in typescript that `team-mgnt` is dependent on, created following [publishing-a-typescript-react-component-to-npm](https://medium.com/@jchiam/publishing-a-typescript-react-component-to-npm-d3cc15b8d0a2) 


### Commands

I think the order matters, at least I had the best luck with the following order: 

 1. `$ lerna bootstrap` - to link the packages, runs npm install in each, and allows you to reference them from each other
 2. `$ lerna link` - to link the packages, **IMPORTANT**: run this after any `npm install ...` command to relink
 3. `$ lerna run build` - builds all the packages for distribution


### Troubleshooting


RE: npm install breaking link to `truthlab-uiux`, https://github.com/npm/npm/issues/17287

```
We are well aware of npm link issues, and it will be overhauled with npm@7 later this year. As @legodude17 says, please refer to https://npm.community/t/new-npm-link-command/24/1 for more information on this, and discussions about what it should do. Until then, consider npm as it is to be broken and the overhaul to be the fix.
```

For now use `$ lerna boostrap` instead of npm install and `$ lerna link` after installing single modules.

 
To fix any tslint errors, i.e. `Import sources within a group must be alphabetized` run `$ tslint --project ./tsconfig.json --fix` and it should reorder them. Here are some import order guidelines:

 1. Installed packages or imports without a directory path should be first
 2. The `./` and `../` matter and should be in the same order
 3. Imports inside {} also should be alphabetized and case sensitive.



### Developing

 * `$ cd packages/<react-app-name>` - edit this single page React app as you normally would. 
   * to reference a peer project, include project `package.json` like you would as if it was on npm
   * `$ npm start` - to run the local dev server for the specific React app
   * `$ npm run watch` - to watch for changes and automatically run `npm run build`, use this inside component packages
     * `watchman-make -p 'src/*.*' 'src/**/*.*' --run 'npm run build'`
   


