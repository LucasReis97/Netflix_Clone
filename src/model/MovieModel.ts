import { JsonProperty } from 'json-object-mapper'
import IGenreModel from './interface/IGenreModel'
import IMovieModel from './interface/IMovieModel'

export default class MovieModel implements IMovieModel {
    @JsonProperty()
    public adult:boolean | undefined

    @JsonProperty({ name: 'backdrop_path' })
    public backdropPath:string | undefined

    @JsonProperty({ name: 'belongs_to_collection' })
    public belongsCollection:object | undefined

    @JsonProperty()
    public budget:number | undefined

    @JsonProperty({ name: 'genre_ids' })
    public genres: IGenreModel[] | undefined

    @JsonProperty()
    public homepage:string | undefined

    @JsonProperty()
    public id:number | undefined

    @JsonProperty({ name: 'imdb_id' })
    public imdbId:number | undefined

    @JsonProperty({ name: 'original_language' })
    public originalLanguage:string | undefined

    @JsonProperty({ name: 'original_title' })
    public originalTitle:string | undefined

    @JsonProperty()
    public overview:string | undefined

    @JsonProperty()
    public popularity:number | undefined

    @JsonProperty({ name: 'poster_path' })
    public posterPath:string | undefined

    @JsonProperty({ name: 'production_companies' })
    public productionCompanies:object[] | undefined

    @JsonProperty({ name: 'production_countries' })
    public productionCountries:object[] | undefined

    @JsonProperty({ name: 'release_date' })
    public releaseDate: Date | undefined

    @JsonProperty()
    public revenue: number | undefined

    @JsonProperty()
    public runtime: number | undefined

    @JsonProperty({ name: 'spoken_languages' })
    public spokenLanguages: object[] | undefined

    @JsonProperty()
    public status:string | undefined

    @JsonProperty()
    public tagline:string | undefined

    @JsonProperty()
    public title:string | undefined

    @JsonProperty()
    public video:boolean | undefined

    @JsonProperty({ name: 'vote_average' })
    public voteAverage:number | undefined

    @JsonProperty({ name: 'vote_count' })
    public voteCount:number | undefined
}
