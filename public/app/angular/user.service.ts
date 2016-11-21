import {Injectable, Input} from 'angular2/core'
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http'


@Injectable()
export class User_Service {

    private _user_collection:any = [];

    @Input()
    get user_collection(){ return this._user_collection }

    constructor(private http: Http) {
    //     this._user_collection.push(
    //         {
    //             "id":"1",
    //             "name":"Acoustic Cry"
    //         },
    //         {
    //             "id":"2",
    //             "name":"Notty Kung"
    //         },
    //         {
    //             "id":"3",
    //             "name":"Kaka"
    //         }
    //     )
    }

    getList(Success_callback:any, Error_callback:any) {

        this.http.get('http://localhost:3000/api/get_all_user/')
            .subscribe(
                data => {
                    console.log(' Success ')
                    Success_callback(data.json())
                },
                err => {
                    Error_callback(err)
                }
            );


    }



}
