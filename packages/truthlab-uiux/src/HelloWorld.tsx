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
