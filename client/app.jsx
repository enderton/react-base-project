import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(<App />, document.getElementById('app'));
