System.register(['angular2/core', 'angular2/platform/browser', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, browser_1, http_1;
    var Test_Socket_Component;
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
            }],
        execute: function() {
            // import * as io from 'socket.io-client';
            Test_Socket_Component = (function () {
                function Test_Socket_Component() {
                    // this.socket = io('http://192.168.1.240:3333');
                    this.socket = socketCluster.connect({
                        host: '192.168.1.240',
                        port: 7999
                    });
                    console.log(this.socket);
                    var recieve_chat_store = this.socket.subscribe('recieve_chat_store');
                    recieve_chat_store.watch(function (data) {
                        console.log(data);
                    });
                }
                Test_Socket_Component = __decorate([
                    core_1.Component({
                        selector: 'test-socket',
                        template: '<h1> Test Socket With Angular2 </h1>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Test_Socket_Component);
                return Test_Socket_Component;
            }());
            exports_1("Test_Socket_Component", Test_Socket_Component);
            browser_1.bootstrap(Test_Socket_Component, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=test_socket.component.js.map