import * as React from 'react'
import { RouteComponentProps, Link } from '@reach/router'
import { Section } from '../components/Section'
import { Card } from '../components/Card'
import { Columns } from '../components/columns'
import { FavoriteContext } from '../context/FavoriteContext'

export const Favorites: React.FunctionComponent<RouteComponentProps> = (
  props
): JSX.Element => {
  return (
    <Section>
      <FavoriteContext.Consumer>
        {({ favorites }): JSX.Element => {
          if (favorites.length > 0) {
            return (
              <Columns isMultiline isMobile>
                {favorites.map(
                  ({ id, title, poster }): JSX.Element => (
                    <Card
                      key={id}
                      title={title}
                      posterPath={poster}
                      id={`${id}`}
                    />
                  )
                )}
              </Columns>
            )
          } else {
            return (
              <div className="content has-text-centered">
                <h1 className="title">You have not added any favorites yet.</h1>
                <p>
                  Go to <Link to="/">the frontpage</Link> to see trending movies
                  or go to <Link to="/search">the search page</Link> to find
                  movies
                </p>
              </div>
            )
          }
        }}
      </FavoriteContext.Consumer>
    </Section>
  )
}
