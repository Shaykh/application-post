import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit, OnDestroy {

  lesPosts: Post[];
  @Input() post: Post;
  postSubscription: Subscription;
  @Input() index: number;

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.postSubscription = this.postsService.postSubject.subscribe(
      (posts: Post[]) => {
        this.lesPosts = posts;
      }
    );
    this.postsService.emitPostSubject();
  }

  onLover(aime: boolean ) {
    if (aime) {
      this.postsService.addLoveItToPost(this.index, true);
    } else {
      this.postsService.addLoveItToPost(this.index, false);
    }
    this.postsService.emitPostSubject();
  }

  onSupprimer() {
    this.postsService.deletePost(this.post);
  }

  getColor() {
    if (this.post.loveIts < 0) {
      return 'red';
    } else if (this.post.loveIts > 0 ) {
      return 'green';
    }
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
