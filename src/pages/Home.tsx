import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { useEndpoint, useFavorites } from '../hooks'
import { trending } from '../endpoints'
import { Spinner } from '../components/Spinner'
import { Section } from '../components/Section'
import { Columns } from '../components/columns'
import { Card } from '../components/Card'
import { Pagination } from '../components/Pagination'
import { Results } from '../interfaces/Results'

export const Home: React.FunctionComponent<RouteComponentProps> = (
  props
): JSX.Element => {
  const [{ data, isError, isLoading }, doGet] = useEndpoint(trending)

  if (isError) {
    return (
      <Section>
        <div className="content">
          <p>Error fetching data</p>
        </div>
      </Section>
    )
  }
  if (isLoading) {
    return <Spinner size={'5x'} />
  }
  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Trending movies</h1>
          </div>
        </div>
      </section>
      <Section>
        <Columns isMobile isMultiline>
          {data
            ? (data as Results).results.map(
                (result): JSX.Element => (
                  <Card
                    title={result.title}
                    posterPath={result.poster_path}
                    id={`${result.id}`}
                    key={result.id}
                  />
                )
              )
            : null}
        </Columns>
        {data ? (
          <Pagination
            totalPages={data.total_pages}
            currentPage={data.page}
            update={doGet}
            url={trending}
          />
        ) : null}
      </Section>
    </>
  )
}
