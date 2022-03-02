import { ObjectMapper } from 'json-object-mapper'
import IMovieDetailModel from '../model/interface/IMovieDetailModel'
import MovieDetailModel from '../model/MovieDetailModel'
import MovieModel from '../model/MovieModel'
import SectionModel from '../model/SectionModel'
import ApiService from './interface/ApiService'

class TmdbService implements ApiService {
  private API_KEY: string;
  private API_BASE: string;

  constructor () {
    this.API_KEY = process.env.REACT_APP_API_KEY || ''
    this.API_BASE = process.env.REACT_APP_API_BASE || ''
    console.log('LOG: ' + this.API_KEY)
  }

  private async basicFetch (endpoint: string) {
    const req = await fetch(`${this.API_BASE}${endpoint}`)
    return await req.json()
  }

  public async getHomeList (): Promise<SectionModel[]> {
    const homeDto: SectionModel[] = []
    homeDto.push(
      new SectionModel(
        'originals',
        'Originais da Netflix',
        ObjectMapper.deserializeArray(
          MovieModel,
          (
            await this.basicFetch(
              `/discover/tv?with_network=213&language=pt-Br&api_key=${this.API_KEY}`
            )
          ).results
        )
      )
    )
    homeDto.push(
      new SectionModel(
        'trending',
        'Recomendados para você',
        ObjectMapper.deserializeArray(
          MovieModel,
          (
            await this.basicFetch(
              `/trending/all/week?language=pt-Br&api_key=${this.API_KEY}`
            )
          ).results
        )
      )
    )
    homeDto.push(
      new SectionModel(
        'toprated',
        'Em alta',
        ObjectMapper.deserializeArray(
          MovieModel,
          (
            await this.basicFetch(
              `/movie/top_rated?language=pt-Br&api_key=${this.API_KEY}`
            )
          ).results
        )
      )
    )
    homeDto.push(
      new SectionModel(
        'war',
        'Guerra',
        ObjectMapper.deserializeArray(
          MovieModel,
          (
            await this.basicFetch(
              `/discover/tv?with_genres=10752&language=pt-Br&api_key=${this.API_KEY}`
            )
          ).results
        )
      )
    )
    homeDto.push(
      new SectionModel(
        'comedy',
        'Comédia',
        ObjectMapper.deserializeArray(
          MovieModel,
          (
            await this.basicFetch(
              `/discover/tv?with_genres=35&language=pt-Br&api_key=${this.API_KEY}`
            )
          ).results
        )
      )
    )
    homeDto.push(
      new SectionModel(
        'family',
        'Familia',
        ObjectMapper.deserializeArray(
          MovieModel,
          (
            await this.basicFetch(
              `/discover/tv?with_genres=10751&language=pt-Br&api_key=${this.API_KEY}`
            )
          ).results
        )
      )
    )
    homeDto.push(
      new SectionModel(
        'romance',
        'Romance',
        ObjectMapper.deserializeArray(
          MovieModel,
          (
            await this.basicFetch(
              `/discover/tv?with_genres=10749&language=pt-Br&api_key=${this.API_KEY}`
            )
          ).results
        )
      )
    )
    homeDto.push(
      new SectionModel(
        'documentary',
        'Documentarios',
        ObjectMapper.deserializeArray(
          MovieModel,
          (
            await this.basicFetch(
              `/discover/tv?with_genres=99&language=pt-Br&api_key=${this.API_KEY}`
            )
          ).results
        )
      )
    )
    return homeDto
  }

  public async getMovieInfo (
    id: number | undefined,
    type: string
  ): Promise<IMovieDetailModel> {
    let info
    switch (type) {
      case 'movie':
        info = await this.basicFetch(
          `/movie/${id}?language=pt-Br&api_key=${this.API_KEY}`
        )
        break
      case 'tv':
        info = await this.basicFetch(
          `/tv/${id}?language=pt-Br&api_key=${this.API_KEY}`
        )
        break
    }
    return ObjectMapper.deserialize(MovieDetailModel, info)
  }
}

export default new TmdbService()
