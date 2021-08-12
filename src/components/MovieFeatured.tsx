import React from 'react'
import IMovieDetailModel from '../model/interface/IMovieDetailModel'
import './style/MovieFeatured.css'

type MovieFeaturedProps={
    item: IMovieDetailModel
}

export default function MovieFeatured ({ item }: MovieFeaturedProps) {
  const firstDateFormated = new Date(item.firstAirDate ?? '')

  return (
  <section className="featured" style={{
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdropPath})`
  }}>
    <div className="featured--vertical">
      <div className="featured--horizontal">
        <div className="featured--name">{item.originalName}</div>

        <div className="featured--info">
          <div className="featured--points">{item.voteAverage} pontos</div>
          <div className="featured--year">{firstDateFormated.getFullYear()}</div>
          <div className="featured--seasons">{item.numberOfSeasons} temporada{item.numberOfSeasons !== 1 ? 's' : ''}</div>
        </div>
        <div className="featured--description">{item.overview !== undefined && item.overview?.length >= 200 ? item.overview?.substring(0, 150) + '...' : item.overview}</div>
        <div className="featured--buttons">
          <a href={`/watch/${item.id}`} className="featured--watchbutton">► Assistir</a>
          <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ Minha Lista</a>
        </div>
        <div className="featured--genres"><strong>Gêneros: </strong>{item.genres?.map((item) => item.name).join(', ')}</div>
      </div>
    </div>
  </section>
  )
}
