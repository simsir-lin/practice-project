import React from 'react';
import ajax from '../utils/ajax';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "list": []
    };
  }

  //当初次渲染完毕
  componentDidMount() {
    this.setState({
      firstView: true
    });
  }

  //当传入的props有变化
  componentWillReceiveProps(props) {
    let keyword = props.keyword;
    let url = 'https://api.github.com/search/users?q=' + keyword;
    this.setState({'firstView': false});
    ajax(url).then((data) => {
      this.setState({ "list": data.items });
    }, () => {
      this.setState({ "list": [] });
    });
  }

  render() {
    if (this.state.firstView) {
      return (
        <div></div>
      )
    }

    return (
      <div>
        {this.state.list.map(item=>{
          return (
            <div className="card">
              <img className="card-img-top" src={item.avatar_url} />
              <div className="card-block">
                <p className="card-text">{item.login}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
