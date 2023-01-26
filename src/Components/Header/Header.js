import React,{Component} from "react";
import {Link} from 'react-router-dom'
import Logo from '../../commonResource/images/icons/logo-sm.png'
import Search from '../../commonResource/images/icons/search-icon-sm.png'
import Cart from '../../commonResource/images/icons/cart-sm.png'
import HeaderText from "./Child/HeaderText";
import Images from "./Child/Images";
import './Header.css'
class Header extends Component {
    render() {
      return (
        <>
          <div className="nav-wrapper fixed-top">
            <div className="container">
              <nav className="navbar navbar-toggleable-sm navbar-expand-md">
                <button
                  className="navbar-toggler navbar-toggler-right"
                  type="button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  ☰
                </button>
                <Link className="navbar-brand mx-auto" to="/">
                  <img src={Logo} alt="" />
                </Link>

                <div className="navbar-collapse collapse">
                  <ul className="navbar-nav nav-justified w-100 nav-fill">
                    <HeaderText links="/mac" brand="mac" />
                    <HeaderText links="/iphone" brand="iphone" />
                    <HeaderText links="/ipad" brand="ipad" />
                    <HeaderText links="/" brand="watch" />
                    <HeaderText links="/" brand="tv" />
                    <HeaderText links="/" brand="music" />
                    <HeaderText links="/" brand="Support" />
                    <Images links="/support" pic={Search} />
                    <Images inks="/cart" pic={Cart} />
                   
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </>
      );
}
}

export default Header