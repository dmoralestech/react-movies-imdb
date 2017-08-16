import React from 'react';
import { render } from 'react-dom';
import App from './App';

// const Test = () => ( <h1> Hello World </h1> )

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};
renderApp();

// if (module.hot) {
//   module.hot.accept('./App', () => {
//     renderApp();
//   });
// }
