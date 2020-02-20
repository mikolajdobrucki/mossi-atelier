import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
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

    if(url.includes(".com")) {
      url = url.split('.com/')[1]
    } else {
      url = url.split('http://localhost:8000/')[1]
    }
    
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        id="navbar"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
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
                  <span className="navbar-item-inactive">
                    PL
                    <span className="navbar-separator">/</span>
                  </span>
                <Link to={`/en/${url}`}>
                  EN
                </Link>
              </div>
            </div>
            <div className="navbar-start navbar-navigation">
              <Link className="navbar-item" to="/about">
                <span>
                  <span className="navbar-item-number">01/</span>
                  O nas
                </span>
              </Link>
              <Link className="navbar-item" to="/projects">
                <span>
                  <span className="navbar-item-number">02/</span>
                  Projekty
                </span>
              </Link>
              <Link className="navbar-item" to="/partners">
                <span>
                  <span className="navbar-item-number">03/</span>
                  Partnerzy
                </span>
              </Link>
              <Link className="navbar-item" to="/contact">
                <span>
                  <span className="navbar-item-number">04/</span>
                  Kontakt
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
