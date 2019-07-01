import * as React from 'react'
import { Result } from '../interfaces/Results'
import { Column } from './columns'
import { poster } from '../endpoints'
import { Link } from '@reach/router'
import { FontAwesomeIcon, faStar, faBan } from '../icons'
import { useFavorites } from '../hooks'
import { Favorite } from '../interfaces/Favorite'
import { FavoriteContext } from 'src/context/FavoriteContext'

interface Props {
  id: string
  title: string
  posterPath: string | null
  setFavoriteAlt?: React.Dispatch<React.SetStateAction<Favorite[]>>
}

export const Card: React.FunctionComponent<Props> = ({
  id,
  title,
  posterPath,
}): JSX.Element => {
  // const [favorites, setFavorites] = useFavorites()
  const isFavorite = (favorites: Favorite[]): boolean =>
    favorites.filter((el): boolean => el.id == id).length > 0
  return (
    <FavoriteContext.Consumer>
      {({ favorites, setFavorites }): JSX.Element => (
        <Column mobileWidth={12} tabletWidth={4} desktopWidth={3}>
          <div className="card">
            <div className="card-image">
              <Link to={`/detail/${id}`}>
                <figure className="image is-2by3">
                  <img
                    src={
                      posterPath
                        ? `${poster}${posterPath}`
                        : 'https://via.placeholder.com/500'
                    }
                    alt={title}
                  />
                </figure>
              </Link>
            </div>
            <div className="card-content">
              <p className="title is-4">{title}</p>

              <button
                className="button"
                onClick={(): void => {
                  if (isFavorite(favorites)) {
                    setFavorites(favorites.filter((el): boolean => el.id != id))
                  } else {
                    setFavorites([
                      ...favorites,
                      { id, title, poster: posterPath },
                    ])
                  }
                }}
              >
                <span className="icon">
                  <FontAwesomeIcon
                    icon={isFavorite(favorites) ? faBan : faStar}
                  />
                </span>
                <span>
                  {isFavorite(favorites) ? 'Remove from' : 'Add to'} favorites
                </span>
              </button>
            </div>
          </div>
        </Column>
      )}
    </FavoriteContext.Consumer>
  )
}
