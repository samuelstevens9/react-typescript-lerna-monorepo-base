import * as React from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import {TLHeaderNavigation} from 'truthlab-uiux';

import Team from './containers/Team';

class App extends React.Component {
  public render() {
    return (
    <TLHeaderNavigation>
      <Route path="/" component={Team} />
    </TLHeaderNavigation>
    );
  }
}

export default App;
