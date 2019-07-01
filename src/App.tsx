import * as React from 'react'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { Nav } from './components/Nav'
import './styles/master.scss'
import { Detail } from './pages/Detail'
import { Search } from './pages/Search'
import { Favorites } from './pages/Favorites'
import { FavoriteContext } from './context/FavoriteContext'
import { useFavorites } from './hooks'

export const App: React.FunctionComponent = (): JSX.Element => {
  const [favorites, setFavorites] = useFavorites()
  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      <div className="app">
        <Nav />
        <main>
          <Router>
            <Home path="/" />
            <Detail path="/detail/:id" />
            <Search path="/search" />
            <Favorites path="/favorites" />
          </Router>
        </main>
      </div>
    </FavoriteContext.Provider>
  )
}
