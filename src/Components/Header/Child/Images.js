import React, { Component } from 'react'

export default class Images extends Component {
  render() {
    return (
      <div>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href={this.props.links}>
            <img src={this.props.pic} />
          </a>
        </li>
      </div>
    );
  }
}
