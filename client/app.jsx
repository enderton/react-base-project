/* global document */
import React from 'react';
import ReactDOM from 'react-dom';

import BaseLayer from './components/base-layer';

const App = function App(props, context) {
  return (
    <div className='app'>
      <BaseLayer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
