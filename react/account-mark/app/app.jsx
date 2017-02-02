import './app.scss';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          hello
        </div>
      )
    }
};

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);
