import React from 'react';

import BaseLayer from './components/base-layer';

class App extends React.Component {

  render() {
    return (
      <div className = 'app'>
        <BaseLayer />
      </div>
    );
  }
}

React.render(<App />, document.getElementById('app'));
