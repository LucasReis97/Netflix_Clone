import React from 'react'
import MovieModel from '../model/MovieModel'
import './style/MovieRow.css'

type MovieRowProps = {
  title: string,
  items: MovieModel[]
}

export default function MovieRow ({ title, items }: MovieRowProps) {
  return (
  <div className="movieRow">
    <h2>{ title }</h2>
    <div className="movieRow--listarea">
      <div className="movieRow--list">
        {items.length > 0 && items.map((item, key) => (
          <div key={key} className="movieRow--item">
            <img src={`https://image.tmdb.org/t/p/w300${item.posterPath}`} alt={`${item.originalTitle}`}/>
          </div>
        ))}
      </div>

    </div>
  </div>
  )
}
