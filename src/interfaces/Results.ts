export interface Results {
  page: number
  total_pages: number
  total_results?: number
  results: Result[]
}

export interface Result {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  poster_path: string | null
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  popularity: number
}
