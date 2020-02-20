import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const NavbarEn = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {

    let url = typeof window !== 'undefined'
      ? window.location.href
      : '';

    url = url.split('/en')[1]

    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        id="navbar"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/en" className="navbar-item" title="Logo">
              <img src={logo} alt="Mossi Atelier logo" />
            </Link>
            {/* Hamburger menu */}
            <button
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start navbar-languages">
              <div className="navbar-item">
                <Link to={`/${url}`}>
                  PL
                </Link>
                <span className="navbar-item-inactive">
                  <span className="navbar-separator">/</span>
                    EN
                </span>
              </div>
            </div>
            <div className="navbar-start navbar-navigation">
              <Link className="navbar-item" to="/en/about">
                <span>
                  <span className="navbar-item-number">01/</span>
                    About us
                  </span>
              </Link>
              <Link className="navbar-item" to="/en/projects">
                <span>
                  <span className="navbar-item-number">02/</span>
                    Projects
                  </span>
              </Link>
              <Link className="navbar-item" to="/en/partners">
                <span>
                  <span className="navbar-item-number">03/</span>
                    Partners
                  </span>
              </Link>
              <Link className="navbar-item" to="/en/contact">
                <span>
                  <span className="navbar-item-number">04/</span>
                    Contact
                  </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavbarEn
