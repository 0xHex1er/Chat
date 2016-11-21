System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var User_Service;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            User_Service = (function () {
                function User_Service(http) {
                    this.http = http;
                    this._user_collection = [];
                    //     this._user_collection.push(
                    //         {
                    //             "id":"1",
                    //             "name":"Acoustic Cry"
                    //         },
                    //         {
                    //             "id":"2",
                    //             "name":"Notty Kung"
                    //         },
                    //         {
                    //             "id":"3",
                    //             "name":"Kaka"
                    //         }
                    //     )
                }
                Object.defineProperty(User_Service.prototype, "user_collection", {
                    get: function () { return this._user_collection; },
                    enumerable: true,
                    configurable: true
                });
                User_Service.prototype.getList = function (Success_callback, Error_callback) {
                    this.http.get('http://localhost:3000/api/get_all_user/')
                        .subscribe(function (data) {
                        console.log(' Success ');
                        Success_callback(data.json());
                    }, function (err) {
                        Error_callback(err);
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], User_Service.prototype, "user_collection", null);
                User_Service = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], User_Service);
                return User_Service;
            }());
            exports_1("User_Service", User_Service);
        }
    }
});
//# sourceMappingURL=user.service.js.map