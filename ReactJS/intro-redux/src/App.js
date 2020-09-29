import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux/reducers';
import Count from './component/Count';

const store = createStore(
  reducer,

  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Teste de Redux</h1>
        <Count />
      </div>
    </Provider>
  );
}

export default App;
