import * as React from 'react';
import * as ReactDOM from 'react-dom';

// How to find object configs
//Object.keys(window).filter(x => {return x.indexOf('Config') != -1}).map( el => window[el])

class App extends React.Component {
  render() {
    return (
      <div>Hello Yisus!</div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
