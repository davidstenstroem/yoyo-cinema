import * as React from 'react'
import { Favorite } from 'src/interfaces/Favorite'

export interface FavoriteContextState {
  favorites: Favorite[]
  setFavorites?: React.Dispatch<React.SetStateAction<Favorite[]>>
}

export const FavoriteContext = React.createContext<FavoriteContextState>({
  favorites: [],
})
