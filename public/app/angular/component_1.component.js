System.register(['angular2/core', 'angular2/platform/browser', 'angular2/http', './main.service', './user.service', './highlight.directive'], function(exports_1, context_1) {
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
    var core_1, browser_1, http_1, main_service_1, user_service_1, highlight_directive_1;
    var A_Component;
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
            function (main_service_1_1) {
                main_service_1 = main_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            A_Component = (function () {
                function A_Component(user_serv, main_serv) {
                    this._list_of_user = [];
                    this._list_of_user = user_serv.user_collection;
                    this._main_serv = main_serv;
                    console.log(" Create Component 1");
                }
                A_Component.prototype.add_user = function (user) {
                    alert('add user');
                    var user_info = { "id": user.id, "name": user.name };
                    this._main_serv.changeChat(user_info);
                };
                __decorate([
                    core_1.Input('list_of_user'), 
                    __metadata('design:type', Object)
                ], A_Component.prototype, "_list_of_user", void 0);
                A_Component = __decorate([
                    core_1.Component({
                        selector: 'render-A',
                        template: "<li *ngFor=\"#user of _list_of_user\">\n                    <a myHighlight (click)=\"add_user(user)\">{{user.name}}</a>\n               </li>",
                        providers: [main_service_1.Main_Service, user_service_1.User_Service],
                        directives: [highlight_directive_1.HighlightDirective]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.User_Service, main_service_1.Main_Service])
                ], A_Component);
                return A_Component;
            }());
            exports_1("A_Component", A_Component);
            browser_1.bootstrap(A_Component, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=component_1.component.js.map