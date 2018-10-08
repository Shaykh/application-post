import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post-list-item/post.model';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  lesPosts: Post[];
  postSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postSubject.subscribe(
      (posts: Post[]) => {
        this.lesPosts = posts;
      }
    );
    this.postsService.emitPostSubject();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
