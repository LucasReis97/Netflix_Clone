import IGenreModel from './IGenreModel'

export default interface IMovieModel{
    adult:boolean | undefined
    backdropPath:string | undefined
    belongsCollection:object | undefined
    budget:number | undefined
    genres: IGenreModel[] | undefined
    homepage:string | undefined
    id:number | undefined
    imdbId:number | undefined
    originalLanguage:string | undefined
    originalTitle:string | undefined
    overview:string | undefined
    popularity:number | undefined
    posterPath:string | undefined
    productionCompanies:object[] | undefined
    productionCountries:object[] | undefined
    releaseDate: Date | undefined
    revenue: number | undefined
    runtime: number | undefined
    spokenLanguages: object[] | undefined
    status:string | undefined
    tagline:string | undefined
    title:string | undefined
    video:boolean | undefined
    voteAverage:number | undefined
    voteCount:number | undefined
}
