import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

export class Post {
    constructor(public Id: number,
        public CheckInType: number,
        public FoursquareVenueId: string,
        public FoursquareVenueName: string,
        public Email: string,
        public CheckInDescription: string) { }
}

@Injectable()
export class PostService {
    constructor(private _http: Http) { }

    getPosts() {
        return this._http.get('api/posts')
            .map((response: Response) => {
                return <Post[]>response.json()
            })
            .do(data =>
                console.log(data))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'SERVER ERROR');
    }
}