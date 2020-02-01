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
            <div className="navbar-start has-text-centered">
              <div className="navbar-item">
                <Link to="/">
                  PL
                </Link>
                <span className="navbar-separator">/</span>
                  EN
              </div>
            </div>
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/en/about">
                About us
              </Link>
              <Link className="navbar-item" to="/en/projects">
                Projects
              </Link>
              <Link className="navbar-item" to="/en/partners">
                Partners
              </Link>
              <Link className="navbar-item" to="/en/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavbarEn
