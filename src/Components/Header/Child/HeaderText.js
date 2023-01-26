import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class HeaderText extends Component {
  render() {
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to={this.props.links}>
            {this.props.brand}
          </Link>
        </li>

      </>
    );
  }
}
