import {Component, NgZone, Input} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http'
import {Main_Service} from './main.service'


@Component({
    selector: 'render-B',
    template: `<li *ngFor="#user of _list_of_array_collection" style="margin: 10px;">
                    <p>{{user.name}}</p>
               </li><p>{{getMessage()}}</p>`,
    providers: [Main_Service]
})

export class B_Component {

    _list_of_array_collection:any = [];
    _test_val:string = "Test Message";

    message : any = {"name": "Test Message" }
    //zone: NgZone;
    constructor(main_serv:Main_Service, private zone:NgZone){
    //    this.zone = zone;
    //     this._list_of_array_collection = main_serv.array_collection
        console.log(" Create Component 2", this)


        let context  = this;
        main_serv.currentChat$.subscribe(
            chatname => {



                this.zone.run(function(){
                    context._test_val = chatname.name;
                    context._list_of_array_collection.push({
                        "id": chatname.id,
                        "name": chatname.name
                    })
                    context.message.name = chatname.name

                    console.log(context)
                    console.log('Observ = ', chatname.name)
                })


            }
        )

        // console.log(main_serv.currentChat$)
    }

    getMessage(){
        console.log(this.message.name)
        return this.message.name
    }

    @Input()
    set test_val(value){
        console.log(this)
        this._test_val = value
        console.log(this)
        console.log(value)
        alert('component 2 : ' + value)
        console.log(window.AngularComponentRef)
    }

    get test_val(){
        return this._test_val
    }
}

bootstrap( B_Component, [ HTTP_PROVIDERS ] );