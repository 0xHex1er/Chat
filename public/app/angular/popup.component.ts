import {Component, Input} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http'


@Component({
    selector: 'render-popup',
    templateUrl: '/app/angular/popup.component.html'
})

export class Popup_Component {

    _message:any = []

    @Input() _user_id: string = ""
    @Input() _user_name: string = ""

    constructor(){

        this._message.push({
            "user":"test01",
            "store": "store01",
            "message": "Hello !!"
        })

    }

    send_message() {
        // event.preventDefault();
        this._message.push({
            "user":"test01",
            "store": "store01",
            "message": this._msg
        })
        this._msg = ""
    }
}

// bootstrap( Popup_Component, [ HTTP_PROVIDERS ] );