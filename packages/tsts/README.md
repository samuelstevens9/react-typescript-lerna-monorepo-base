# typescript react component base

## To create a new Component

 1. Define the Props and declare the class in `index.d.ts` replacing `HellowWorld` with the component name.
    ```
    export interface HelloWorldProps extends React.Props<HelloWorld> {
    color: string;
    }
    export declare class HelloWorld extends React.Component<HelloWorldProps, any> {}
    ```
 2. Create the new component as normal, but DO NOT `EXPORT DEFAULT` as it will break the imports form another React app.
    ```
    import * as React from 'react';
    import { HelloWorldProps } from '../index';

    export class HelloWorld extends React.Component<HelloWorldProps, any> {
      public render() {
        return (
          <div style={{ color: this.props.color }}>
            Hello world!
          </div>
        );
      }
    }
    ```
 3. Add the export/import to `src/index.ts`
    ```
    export * from './HelloWorld';
    ```
 4. Build it `npm run build` or auto if you are watching, and to import in another React app
    ```
    import {HelloWorld} from 'truthlab-uiux';
    ```

### Developing

 * `$ npm run watch` - to watch for changes and automatically run `npm run build`, use this inside component packages
   * `watchman-make -p 'src/*.*' 'src/**/*.*' --run 'npm run build'`
   


### Thank You to for keeping component creation simple https://medium.com/@jchiam/publishing-a-typescript-react-component-to-npm-d3cc15b8d0a2