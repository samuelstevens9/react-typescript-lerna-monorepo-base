import * as React from 'react';

import './App.css';

// import HelloWorld from 'tsts';
// import logo from './logo.svg';
// import Hello from './components/Hello';
// import Hello from './containers/Hello';

import { Route } from 'react-router-dom';

import Team from './containers/Team';

import {TLHeaderNavigation} from 'truthlab-uiux';
// import {HelloWorld} from 'truthlab-uiux';

class App extends React.Component {
  public render() {
    // console.log(HelloWorld,"TLHeaderNavigation", TLHeaderNavigation);
    // console.log(TLUIUX.default);
    
    return (
      <TLHeaderNavigation>
        <Route path="/team" component={Team} />
      </TLHeaderNavigation>
    );
  }
}

export default App;
