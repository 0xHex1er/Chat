System.register(['angular2/core', 'angular2/platform/browser', 'angular2/http', './main.service', './popup.component'], function(exports_1, context_1) {
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
    var core_1, browser_1, http_1, main_service_1, popup_component_1;
    var B_Component;
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
            function (popup_component_1_1) {
                popup_component_1 = popup_component_1_1;
            }],
        execute: function() {
            B_Component = (function () {
                //zone: NgZone;
                function B_Component(main_serv, zone) {
                    var _this = this;
                    this.zone = zone;
                    this._list_of_array_collection = [];
                    this._test_val = "Test Message";
                    this._popup_name = "";
                    this.message = { "name": "Test Message" };
                    //    this.zone = zone;
                    //     this._list_of_array_collection = main_serv.array_collection
                    console.log(" Create Component 2", this);
                    var context = this;
                    main_serv.currentChat$.subscribe(function (chatname) {
                        _this.zone.run(function () {
                            context._test_val = chatname.name;
                            context._popup_name = chatname.name;
                            context._list_of_array_collection.push({
                                "id": chatname.id['$oid'],
                                "name": chatname.name
                            });
                            context.message.name = chatname.name;
                            console.log(context._list_of_array_collection);
                            console.log('Observ = ', chatname.name);
                        });
                    });
                    // console.log(main_serv.currentChat$)
                }
                B_Component.prototype.getMessage = function () {
                    console.log(this.message.name);
                    return this.message.name;
                };
                Object.defineProperty(B_Component.prototype, "test_val", {
                    get: function () {
                        return this._test_val;
                    },
                    set: function (value) {
                        console.log(this);
                        this._test_val = value;
                        console.log(this);
                        console.log(value);
                        alert('component 2 : ' + value);
                        console.log(window.AngularComponentRef);
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], B_Component.prototype, "test_val", null);
                B_Component = __decorate([
                    core_1.Component({
                        selector: 'render-B',
                        template: "<div style=\"position: relative;\">\n                   <render-popup \n                        *ngFor=\"#popup of _list_of_array_collection\"\n                        [_user_id]=\"popup.id\" [_user_name]=\"popup.name\">\n                                         \n                   </render-popup>\n               </div>",
                        providers: [main_service_1.Main_Service],
                        directives: [popup_component_1.Popup_Component]
                    }), 
                    __metadata('design:paramtypes', [main_service_1.Main_Service, core_1.NgZone])
                ], B_Component);
                return B_Component;
            }());
            exports_1("B_Component", B_Component);
            browser_1.bootstrap(B_Component, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=component_2.component.js.map