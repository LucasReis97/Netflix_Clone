
import { JsonProperty } from 'json-object-mapper'
import IGenreModel from './interface/IGenreModel'
import IMovieDetailModel from './interface/IMovieDetailModel'

export default class MovieDetailModel implements IMovieDetailModel {
    @JsonProperty({ name: 'backdrop_path' })
    public backdropPath:string | undefined

    @JsonProperty({ name: 'created_by' })
    public createdBy:[object] | undefined

    @JsonProperty({ name: 'episode_run_time' })
    public episodeRunTime:[number] | undefined

    @JsonProperty({ name: 'first_air_date' })
    public firstAirDate:string | undefined

    @JsonProperty()
    public genres:IGenreModel[] | undefined

    @JsonProperty()
    public homepage:string | undefined

    @JsonProperty()
    public id:number | undefined

    @JsonProperty({ name: 'in_production' })
    public inProduction:boolean | undefined

    @JsonProperty()
    public languages:[string] | undefined

    @JsonProperty({ name: 'last_air_date' })
    public lastAirDate:string | undefined

    @JsonProperty({ name: 'last_episode_to_air' })
    public lastEpisodeToAir:object | undefined

    @JsonProperty()
    public name:string | undefined

    @JsonProperty({ name: 'next_episode_to_air' })
    public nextEpisodeToAir:null | undefined

    @JsonProperty()
    public networks:[object] | undefined

    @JsonProperty({ name: 'number_of_episodes' })
    public numberOfEpisodes:number | undefined

    @JsonProperty({ name: 'number_of_seasons' })
    public numberOfSeasons:number | undefined

    @JsonProperty({ name: 'origin_country' })
    public originCountry:[string] | undefined

    @JsonProperty({ name: 'original_language' })
    public originalLanguage:string | undefined

    @JsonProperty({ name: 'original_name' })
    public originalName:string | undefined

    @JsonProperty()
    public overview:string | undefined

    @JsonProperty()
    public popularity:number | undefined

    @JsonProperty({ name: 'poster_path' })
    public posterPath:string | undefined

    @JsonProperty({ name: 'production_companies' })
    public productionCompanies:[object] | undefined

    @JsonProperty({ name: 'production_countries' })
    public productionCountries:[object] | undefined

    @JsonProperty()
    public seasons:[object] | undefined

    @JsonProperty({ name: 'spoken_languages' })
    public spokenLanguages:[object] | undefined

    @JsonProperty({ name: 'english_name' })
    public englishName:string | undefined

    @JsonProperty({ name: 'iso_639_1' })
    public iso6391:string | undefined

    @JsonProperty()
    public status:string | undefined

    @JsonProperty()
    public tagline:string | undefined

    @JsonProperty()
    public type:string | undefined

    @JsonProperty({ name: 'vote_average' })
    public voteAverage:number | undefined

    @JsonProperty({ name: 'vote_count' })
    public voteCount:number | undefined
}
