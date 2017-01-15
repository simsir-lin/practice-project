import '../node_modules/bootstrap/scss/bootstrap.scss';
import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Input from './component/input';
import List from './component/list';

class App extends React.Component{
    constructor(props) {
      super(props);
      this.refreshKeyword = this.refreshKeyword.bind(this);
      this.state = {
        'keyword': ''
      };
    }

    refreshKeyword(keyword) {
      this.setState({
        'keyword': keyword
      });
    }

    render() {
      return (
        <div className="container">
          <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github User</h3>
            <Input sendAction={this.refreshKeyword}/>
          </section>
          <section>
            <List keyword={this.state.keyword}/>
          </section>
        </div>
      )
    }
};

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);
