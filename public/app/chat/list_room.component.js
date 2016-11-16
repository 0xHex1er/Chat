System.register(['angular2/core', 'angular2/platform/browser', 'angular2/http', './list_room.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, http_1, list_room_service_1;
    var List_Room_Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (list_room_service_1_1) {
                list_room_service_1 = list_room_service_1_1;
            }],
        execute: function() {
            List_Room_Component = (function () {
                function List_Room_Component(room) {
                    this.list_room = [];
                    room.getList(function (json_data) {
                        console.log(json_data);
                        this.list_room = json_data;
                    }.bind(this), function (err) {
                        console.log(' Error : ' + err);
                    });
                }
                List_Room_Component = __decorate([
                    core_1.Component({
                        selector: 'list-room',
                        template: "<li *ngFor=\"#room of list_room\" id=\"{{room.id['$oid']}}\">\n                    <a>{{room.name}}</a>\n               </li>",
                        providers: [list_room_service_1.List_Room_Service]
                    }), 
                    __metadata('design:paramtypes', [list_room_service_1.List_Room_Service])
                ], List_Room_Component);
                return List_Room_Component;
            }());
            exports_1("List_Room_Component", List_Room_Component);
            browser_1.bootstrap(List_Room_Component, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=list_room.component.js.map