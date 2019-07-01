import * as React from 'react'
import classnames from 'classnames'
import { trending } from 'src/endpoints'

interface Props {
  currentPage: number
  totalPages: number
  update: React.Dispatch<React.SetStateAction<string>>
  url: string
}

export const Pagination: React.FunctionComponent<Props> = ({
  currentPage,
  totalPages,
  update,
  url,
}): JSX.Element => {
  const goToPage = (page: number): void => {
    if (page > 0 && page <= totalPages) {
      update(`${url}&page=${page}`)
    }
  }

  const prev = (): void => {
    if (currentPage > 1) {
      update(`${url}&page=${currentPage - 1}`)
    }
  }

  const next = (): void => {
    if (currentPage < totalPages) {
      update(`${url}&page=${currentPage + 1}`)
    }
  }

  const getPageNumbers = (): number[] => {
    // total number of visible pages in pagination
    const totalNumbers = 7

    if (totalPages > totalNumbers) {
      if (currentPage === 1 || currentPage < totalNumbers - 2) {
        return [1, 2, 3, 4, 5, -1, totalPages]
      } else if (
        currentPage === totalPages ||
        currentPage > totalPages - (totalNumbers - 2)
      ) {
        return [
          1,
          -1,
          totalPages - 5,
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ]
      } else {
        return [
          1,
          -1,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          -1,
          totalPages,
        ]
      }
    } else {
      let arr: number[] = []
      for (let i = 1; i <= totalPages; i++) {
        arr.push(i)
      }
      return arr
    }
    // default return
    return []
  }
  return (
    <nav className="pagination is-centered">
      <a className="pagination-previous" onClick={(): void => prev()}>
        Previous
      </a>
      <a className="pagination-next" onClick={(): void => next()}>
        Next page
      </a>
      <ul className="pagination-list">
        {getPageNumbers().map(
          (page): JSX.Element => (
            <li
              key={
                Math.random()
                  .toString(36)
                  .substring(2, 15) +
                Math.random()
                  .toString(36)
                  .substring(2, 15)
              }
            >
              <a
                onClick={(): void => goToPage(page)}
                className={classnames(
                  page > 0 ? 'pagination-link' : 'pagination-ellipsis',
                  page === currentPage && 'is-current'
                )}
              >
                {page > 0 ? page : <span>&hellip;</span>}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  )
}
