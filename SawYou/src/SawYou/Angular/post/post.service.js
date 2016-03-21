System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1;
    var Post, PostService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            Post = (function () {
                function Post(Id, CheckInType, FoursquareVenueId, FoursquareVenueName, Email, CheckInDescription) {
                    this.Id = Id;
                    this.CheckInType = CheckInType;
                    this.FoursquareVenueId = FoursquareVenueId;
                    this.FoursquareVenueName = FoursquareVenueName;
                    this.Email = Email;
                    this.CheckInDescription = CheckInDescription;
                }
                return Post;
            })();
            exports_1("Post", Post);
            PostService = (function () {
                function PostService(_http) {
                    this._http = _http;
                }
                PostService.prototype.getPosts = function () {
                    return this._http.get('api/posts')
                        .map(function (response) {
                        return response.json();
                    })
                        .do(function (data) {
                        return console.log(data);
                    })
                        .catch(this.handleError);
                };
                PostService.prototype.handleError = function (error) {
                    console.log(error);
                    return Rx_1.Observable.throw(error.json().error || 'SERVER ERROR');
                };
                PostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostService);
                return PostService;
            })();
            exports_1("PostService", PostService);
        }
    }
});
//# sourceMappingURL=post.service.js.map