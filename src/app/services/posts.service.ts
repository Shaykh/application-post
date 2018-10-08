import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../post-list-item/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postSubject = new Subject<Post[]>();
  private posts = [
    {
      title: 'Premier Post',
      content: 'Ceci est le texte du post. Il contient donc un texte sans sens destiné à faire de la quantité de mots écrits.',
      created_at: new Date(),
      loveIts: 0
    },
    {
      title: 'Deuxième Post',
      content: 'Ceci est le texte du post. Il contient donc un texte sans sens destiné à faire de la quantité de mots écrits.',
      created_at: new Date(),
      loveIts: 0
    },
    {
      title: 'Troisième Post',
      content: 'Ceci est le texte du post. Il contient donc un texte sans sens destiné à faire de la quantité de mots écrits.',
      created_at: new Date(),
      loveIts: 0
    }
  ];

  constructor() { }

  emitPostSubject() {
    this.postSubject.next(this.posts.slice());
  }

  addLoveItToPost(i: number, add: boolean = true) {
    if (add) {
      this.posts[i].loveIts ++;
    } else {
      this.posts[i].loveIts --;
    }
    this.emitPostSubject();
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPostSubject();
  }

  deletePost(post: Post) {
    const postToDeleteIndex = this.posts.findIndex(
      (elt) => {
        if (elt === post) {
          return true;
        }
      }
    );

    this.posts.splice(postToDeleteIndex, 1);
    this.emitPostSubject();
  }

}
