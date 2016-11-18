import {Component, Input} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http'

// import * as io from 'socket.io-client';

@Component({
    selector: 'test-socket',
    templateUrl: '/app/chat/test_socket.component.html',
    styleUrls: ['/app/chat/test_socket.css']
})

export class Test_Socket_Component {
    socket:any;
    msg:string = 'old'

    constructor() {

        // this.socket = io('http://localhost:3333');
        this.socket = socketCluster.connect({
            host:'localhost',
            port: 3333
        });

        console.log(this.socket)

        var recieve_chat_store = this.socket.subscribe('recieve_chat_store');
        recieve_chat_store.watch(function(data){
            console.log(data[0].message)
            this.msg = data[0].message


        }.bind(this))

    }

}

bootstrap( Test_Socket_Component, [ HTTP_PROVIDERS ] );
