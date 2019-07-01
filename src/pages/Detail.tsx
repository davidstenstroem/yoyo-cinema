import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { useEndpoint } from '../hooks'
import { details } from '../endpoints'
import { Spinner } from '../components/Spinner'
import { Section } from '../components/Section'
import { Hero } from '../components/Hero'
import { Details } from '../interfaces/Details'

interface Props extends RouteComponentProps {
  id?: string | number
}

export const Detail: React.FunctionComponent<Props> = ({ id }): JSX.Element => {
  const [{ data, isError, isLoading }, doGet] = useEndpoint(details(id))
  console.log(data as Details)
  if (isLoading || !data) {
    return <Spinner size="5x" />
  }
  if (isError) {
    return (
      <Section>
        <div className="content">
          <p>Error fetching data</p>
        </div>
      </Section>
    )
  }
  if (data) {
    const {
      genres,
      title,
      overview,
      tagline,
      backdrop_path: backdropPath,
      release_date: releaseDate,
    } = data as Details
    return (
      <>
        <Hero title={title} tagline={tagline} backdrop={backdropPath} />
        <Section>
          <div className="content">{overview}</div>
          <div className="tags">
            {genres.map(
              ({ id, name }): JSX.Element => (
                <span key={id} className="tag is-rounded">
                  {name}
                </span>
              )
            )}
          </div>
          <div className="content">
            <p>
              <strong>Released: </strong>
              {new Date(releaseDate).getFullYear()}
            </p>
            {/* More details could be added here */}
          </div>
        </Section>
      </>
    )
  }
}
