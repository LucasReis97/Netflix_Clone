import { JsonProperty } from 'json-object-mapper'
import IGenreModel from './interface/IGenreModel'

export default class GenreModel implements IGenreModel {
    @JsonProperty()
    public id:number | undefined

    @JsonProperty()
    public name:string | undefined
}
