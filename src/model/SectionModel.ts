import IMovieModel from './interface/IMovieModel'

export default class SectionModel {
    public section:string
    public title:string
    public items: IMovieModel[]

    constructor (section:string, title: string, items:IMovieModel[]) {
      this.section = section
      this.title = title
      this.items = items
    }
}
