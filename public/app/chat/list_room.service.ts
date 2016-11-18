import {Injectable} from 'angular2/core'
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http'


@Injectable()
export class List_Room_Service {

    constructor(private http: Http) {

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
