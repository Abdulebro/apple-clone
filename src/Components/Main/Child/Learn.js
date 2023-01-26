import React, { Component } from 'react'

export default class Learn extends Component {
  render() {
    return (
      <div>
        <div className="links-wrapper">
          <ul>
            <li>
                        <a href="">{this.props.first}</a>
            </li>
            <li>
                        <a href="">{this.props.second}</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
