import IMovieDetailModel from '../../model/interface/IMovieDetailModel'
import SectionModel from '../../model/SectionModel'

export default interface ApiService{
    getHomeList(): Promise<SectionModel[]>
    getMovieInfo (id:number, type:string): Promise<IMovieDetailModel>
}
