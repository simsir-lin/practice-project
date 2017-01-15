import React from 'react';
import ReactDOM from 'react-dom';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch() {
     let name = ReactDOM.findDOMNode(this.refs.name).value;
     if (name === '') {
      return;
    }
    this.props.sendAction(name);
  }
  render() {
    return (
      <div className="input-group">
        <input className="form-control" type="text" ref="name" />
        <span className="input-group-btn">
          <button className="btn btn-primary" onClick={this.handleSearch}>搜索</button>
        </span>
      </div>
     )
  }
}
