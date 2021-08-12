import React, { useEffect, useState } from 'react'
import 'reflect-metadata'
import MovieRow from './components/MovieRow'
import MovieFeatured from './components/MovieFeatured'
import SectionModel from './model/SectionModel'
import TmdbService from './services/TmdbService'
import './App.css'
import IMovieDetailModel from './model/interface/IMovieDetailModel'

function App () {
  const [movieList, setMovieList] = useState([] as SectionModel[])
  const [featuredData, setFeaturedData] = useState<IMovieDetailModel | null>(null)

  useEffect(() => {
    const loadAll = async () => {
      const list = await TmdbService.getHomeList()
      setMovieList(list)

      const originals = list.filter(i => i.section === 'originals')
      const randomChosen = Math.floor(Math.random() * (originals[0].items.length - 1))
      const featured = await TmdbService.getMovieInfo(originals[0].items[randomChosen].id, 'tv')
      setFeaturedData(featured)
    }

    loadAll()
  }, [])

  return (
    <div className="page">
      {/* Header */}

      {/* Featured */}
      {
        featuredData &&
            <MovieFeatured item={featuredData}/>
      }
      {/* List */}
      <section className="lists">

        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      {/* Footer */}
    </div>
  )
}

export default App
