import * as React from 'react'
import { url } from 'inspector'

interface Props {
  backdrop: string
  title: string
  tagline: string
}

export const Hero: React.FunctionComponent<Props> = ({
  backdrop,
  title,
  tagline,
}): JSX.Element => {
  const path = `https://image.tmdb.org/t/p/original/${backdrop}`
  const style = {
    background: `url(${path}) no-repeat center center`,
    backgroundSize: 'cover',
  }
  return (
    <section className="hero is-large">
      <div className="hero-body" style={style}>
        <div className="container has-text-centered">
          <h1 className="title has-text-outlined-white">{title}</h1>
          <em className="subtitle has-text-outlined-white">{tagline}</em>
        </div>
      </div>
    </section>
  )
}
