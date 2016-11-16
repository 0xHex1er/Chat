import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http'

import * as io from 'socket.io-client';


@Component({
    selector: 'test-socket',
    template: '<h1> Test Socket With Angular2 </h1>'
})

export class Test_Socket_Component {
    socket:any;

    constructor() {
        // this.socket = io('http://192.168.1.240:3333');
        // console.log(this.socket)

        // var socket = io('http://192.168.1.240:3333');
        // console.log(socket)
    }

}

bootstrap( Test_Socket_Component, [ HTTP_PROVIDERS ] );
