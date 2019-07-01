import * as React from 'react'
import { Results } from './interfaces/Results'
import axios from 'axios'
import { Details } from './interfaces/Details'
import { Favorite } from './interfaces/Favorite'

export const useEndpoint = (
  initialUrl: string
): [
  { data: { [key: string]: any }; isError: boolean; isLoading: boolean },
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [url, setUrl] = React.useState<string>(initialUrl)
  const [data, setData] = React.useState<null | { [key: string]: any }>(null)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isError, setIsError] = React.useState<boolean>(false)

  React.useEffect((): void => {
    const getData = async (): Promise<void> => {
      setIsError(false)
      setIsLoading(true)
      try {
        const result = await axios(url)
        setData(result.data)
      } catch (err) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    getData()
  }, [url])
  return [{ data, isLoading, isError }, setUrl]
}

export const useFavorites = (): [Favorite[], React.Dispatch<Favorite[]>] => {
  const [favorites, setFavorites] = React.useState<Favorite[]>(
    (): Favorite[] =>
      JSON.parse(localStorage.getItem('favorites') || '[]') as Favorite[]
  )
  React.useEffect((): void => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  return [favorites, setFavorites]
}
