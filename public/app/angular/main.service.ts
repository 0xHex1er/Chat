import {Injectable, Input, NgZone} from 'angular2/core'
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http'
import { B_Component } from './component_2.component';
import {Subject} from "rxjs/Subject";

@Injectable()
export class Main_Service {
    private currentChat = new Subject<string>();


    static instance : Main_Service;
    constructor(){
        if(Main_Service.instance == null){
            Main_Service.instance = this

        }
        return Main_Service.instance

    }

    currentChat$ = this.currentChat.asObservable()

    changeChat(chatname:string) {
        console.log('Main Service')
        this.currentChat.next(chatname)
    }

}
