import {Component, Input} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http'
import {Main_Service} from './main.service'
import {User_Service} from './user.service'
import { HighlightDirective } from './highlight.directive';

@Component({
    selector: 'render-A',
    template: `<li *ngFor="#user of _list_of_user">
                    <a myHighlight (click)="add_user(user)">{{user.name}}</a>
               </li>`,
    providers: [ Main_Service, User_Service ],
    directives: [ HighlightDirective ]
})

export class A_Component {

    @Input('list_of_user')
    private _list_of_user:any = [];


    private _main_serv:any;

    constructor(user_serv:User_Service, main_serv:Main_Service){
        this._list_of_user = user_serv.user_collection
        this._main_serv = main_serv
        console.log(" Create Component 1")
    }

    add_user(user){
        alert('add user')
        let user_info = {"id":user.id, "name":user.name};
        this._main_serv.changeChat(user_info)
    }
}

bootstrap( A_Component, [ HTTP_PROVIDERS ] );