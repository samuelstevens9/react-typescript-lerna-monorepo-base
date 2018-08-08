import * as React from 'react';

declare module 'truthlab-uiux' { }

export interface HelloWorldProps extends React.Props<HelloWorld> {
  color: string;
}
export declare class HelloWorld extends React.Component<HelloWorldProps, any> {}

export declare class LoadingSpinner extends React.Component<any, any> { }

export interface TLHeaderNavigationProps extends React.Props<TLHeaderNavigation>{
  children?: any,
}
export declare class TLHeaderNavigation extends React.Component<TLHeaderNavigationProps, any> {}

export interface TLCardProps extends React.Props<TLHeaderNavigation>{
  title?: string;
  description?: string;
  children?: any;
}
export declare class TLCard extends React.Component<TLCardProps, any> {}

export interface TLPageHeaderProps extends React.Props<TLHeaderNavigation>{
  title: string;
  description?: string;
}
export declare class TLPageHeader extends React.Component<TLPageHeaderProps, any> {}
