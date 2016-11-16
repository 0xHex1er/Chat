import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http'
import {List_Room_Service} from './list_room.service'


@Component({
    selector: 'list-room',
    template: `<li *ngFor="#room of list_room" id="{{room.id['$oid']}}">
                    <a>{{room.name}}</a>
               </li>`,
    providers: [List_Room_Service]
})

export class List_Room_Component {
    list_room:any = []

    constructor(room:List_Room_Service){
        room.getList(function(json_data){
            console.log(json_data)
            this.list_room = json_data

            }.bind(this),
            function(err){
                console.log(' Error : ' + err)
            }

        )
    }
}

bootstrap( List_Room_Component, [ HTTP_PROVIDERS ] );