import GenreModel from '../GenreModel'

export default interface IMovieDetailModel{
    backdropPath:string | undefined
    createdBy:[object] | undefined
    episodeRunTime:[number] | undefined
    firstAirDate:string | undefined
    genres: GenreModel[] | undefined
    homepage:string | undefined
    id:number | undefined
    inProduction:boolean | undefined
    languages:[string] | undefined
    lastAirDate:string | undefined
    lastEpisodeToAir:object | undefined
    name:string | undefined
    nextEpisodeToAir:null | undefined
    networks:[object] | undefined
    numberOfEpisodes:number | undefined
    numberOfSeasons:number | undefined
    originCountry:[string] | undefined
    originalLanguage:string | undefined
    originalName:string | undefined
    overview:string | undefined
    popularity:number | undefined
    posterPath:string | undefined
    productionCompanies:[object] | undefined
    productionCountries:[object] | undefined
    seasons:[object] | undefined
    spokenLanguages:[object] | undefined
    englishName:string | undefined
    iso6391:string | undefined
    status:string | undefined
    tagline:string | undefined
    type:string | undefined
    voteAverage:number | undefined
    voteCount:number | undefined
}
