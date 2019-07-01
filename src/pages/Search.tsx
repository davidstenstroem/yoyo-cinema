import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Section } from '../components/Section'
import { faSearch, FontAwesomeIcon } from '../icons'
import axios from 'axios'
import { searchUrl } from 'src/endpoints'
import classnames from 'classnames'
import { Results } from '../interfaces/Results'
import { Card } from 'src/components/Card'
import { Columns } from 'src/components/columns'
import { Pagination } from 'src/components/Pagination'
import { useEndpoint } from 'src/hooks'

export const Search: React.FunctionComponent<RouteComponentProps> = (
  props
): JSX.Element => {
  const [{ data, isError, isLoading }, doGet] = useEndpoint(searchUrl(' '))
  const [search, setSearch] = React.useState<string>('')

  const displayResults = (
    data: Results,
    error: boolean,
    loading: boolean
  ): JSX.Element => {
    if (loading) {
      return <p>Loading...</p>
    }
    if (error) {
      return <p>An error occurred and there is no data to display</p>
    }
    if (data) {
      if (data.results.length > 0) {
        return (
          <Columns isMobile isMultiline>
            {data.results.map(
              (result): JSX.Element => (
                <Card
                  key={result.id}
                  title={result.title}
                  posterPath={result.poster_path}
                  id={`${result.id}`}
                />
              )
            )}
          </Columns>
        )
      } else {
        return (
          <div className="content">
            <p>No results</p>
          </div>
        )
      }
    }
  }

  return (
    <Section>
      <div className="level">
        <div className="level-item has-text-centered">
          <div className="field">
            <div
              className={classnames(
                'control',
                'has-icons-left',
                isLoading && 'is-loading'
              )}
            >
              <input
                onChange={(e): void => {
                  setSearch(e.currentTarget.value)
                  if (e.currentTarget.value.length > 1) {
                    doGet(searchUrl(e.currentTarget.value))
                  }
                }}
                value={search}
                type="text"
                className="input"
                placeholder="Type to search"
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
        </div>
      </div>
      {displayResults(data as Results, isError, isLoading)}
      {data && (data as Results).total_pages > 1 && (
        <Pagination
          totalPages={data.total_pages}
          currentPage={data.page}
          update={doGet}
          url={searchUrl(search)}
        />
      )}
    </Section>
  )
}
