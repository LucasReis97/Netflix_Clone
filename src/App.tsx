import React, { useEffect, useState } from 'react'
import 'reflect-metadata'
import MovieRow from './components/MovieRow'
import MovieFeatured from './components/MovieFeatured'
import SectionModel from './model/SectionModel'
import TmdbService from './services/TmdbService'
import './App.css'
import IMovieDetailModel from './model/interface/IMovieDetailModel'
import Header from './components/Header'

function App () {
  const [movieList, setMovieList] = useState([] as SectionModel[])
  const [featuredData, setFeaturedData] = useState<IMovieDetailModel | null>(null)
  const [blackHeader, setBlackHeader] = useState(false)

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

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) { setBlackHeader(true) } else { setBlackHeader(false) }
    }

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className="page">
      <Header black={blackHeader}/>

      { featuredData && <MovieFeatured item={featuredData}/> }

      <section className="lists">
        {
          movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items}/>
          ))
        }
      </section>

      <footer>
        Desenvolvido por Lucas Reis<br/>
        Direitos de imagem para Netflix<br/>
        Dados pego do site Themoviedb.org
      </footer>
      {
        movieList.length <= 0 &&
      <div className="loading">
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando"/>
      </div>
      }
    </div>
  )
}

export default App
