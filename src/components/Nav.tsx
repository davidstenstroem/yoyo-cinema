import * as React from 'react'
import { Link } from '@reach/router'
import { FontAwesomeIcon, faStar, faSearch } from '../icons'
import { FavoriteContext } from 'src/context/FavoriteContext'

export const Nav: React.FunctionComponent = (): JSX.Element => (
  <FavoriteContext.Consumer>
    {({ favorites }): JSX.Element => (
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            YoYo Cinema
          </Link>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>

            <Link
              to="/favorites"
              className="navbar-item"
              title={`You currently have ${favorites.length} ${
                favorites.length === 1 ? 'favorite' : 'favorites'
              }`}
            >
              <span className="icon">
                <FontAwesomeIcon icon={faStar} color="gold" />
              </span>
              <span>Favorites</span>
            </Link>

            <Link to="/search" className="navbar-item">
              <span className="icon">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <span>Search</span>
            </Link>
          </div>
        </div>
      </nav>
    )}
  </FavoriteContext.Consumer>
)
