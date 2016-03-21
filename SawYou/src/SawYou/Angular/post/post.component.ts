import {Component} from 'angular2/core';
import {HTTP_PROVIDERS, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Post, PostService} from './post.service';

@Component({
    selector: 'my-app',
    templateUrl: 'Angular/app/post/postList.html',
    providers: [
        HTTP_PROVIDERS,
        PostService
    ]
    
})
export class AppComponent {
    posts:Observable<Post[]>;

    constructor(private _postService: PostService) { }

    ngOnInit() { this.getPosts(); }

    getPosts() {
        this.posts = this._postService.getPosts();
            
    }
}