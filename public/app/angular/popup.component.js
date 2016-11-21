System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Popup_Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Popup_Component = (function () {
                function Popup_Component() {
                    this._message = [];
                    this._user_id = "";
                    this._user_name = "";
                    this._message.push({
                        "user": "test01",
                        "store": "store01",
                        "message": "Hello !!"
                    });
                }
                Popup_Component.prototype.send_message = function () {
                    // event.preventDefault();
                    this._message.push({
                        "user": "test01",
                        "store": "store01",
                        "message": this._msg
                    });
                    this._msg = "";
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Popup_Component.prototype, "_user_id", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Popup_Component.prototype, "_user_name", void 0);
                Popup_Component = __decorate([
                    core_1.Component({
                        selector: 'render-popup',
                        templateUrl: '/app/angular/popup.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Popup_Component);
                return Popup_Component;
            }());
            exports_1("Popup_Component", Popup_Component);
        }
    }
});
// bootstrap( Popup_Component, [ HTTP_PROVIDERS ] ); 
//# sourceMappingURL=popup.component.js.map