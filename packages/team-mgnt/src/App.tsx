import * as React from 'react';

import './App.css';

// import HelloWorld from 'tsts';

import logo from './logo.svg';

// import Hello from './components/Hello';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { EnthusiasmAction } from './actions/index';
import Hello from './containers/Hello';
import { enthusiasm } from './reducers/index';
import { IStoreState } from './types/index';

const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

class App extends React.Component {
  public render() {
    // console.log(HelloWorld);
    
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Hello />
        </div>
        <div>
        {/* <HelloWorld color={"#FF0"} /> */}
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

      </div>
      </Provider>
    );
  }
}

export default App;
