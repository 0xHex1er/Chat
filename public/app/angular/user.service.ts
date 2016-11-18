import {Injectable, Input} from 'angular2/core'
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http'


@Injectable()
export class User_Service {

    private _user_collection:any = [];

    @Input()
    get user_collection(){ return this._user_collection }

    constructor() {
        this._user_collection.push(
            {
                "id":"1",
                "name":"Acoustic Cry"
            },
            {
                "id":"2",
                "name":"Notty Kung"
            },
            {
                "id":"3",
                "name":"Kaka"
            }
        )
    }



}
