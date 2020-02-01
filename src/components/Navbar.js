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
            <div className="navbar-start has-text-centered">
              <div className="navbar-item">
                  PL
                <span className="navbar-separator">/</span>
                <Link to={`/en/${url}`}>
                  EN
                </Link>
              </div>
            </div>
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                O nas
              </Link>
              <Link className="navbar-item" to="/projects">
                Projekty
              </Link>
              <Link className="navbar-item" to="/partners">
                Partnerzy
              </Link>
              <Link className="navbar-item" to="/contact">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
