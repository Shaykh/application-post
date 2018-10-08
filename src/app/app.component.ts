import { Component } from '@angular/core';
import { Post } from './post-list-item/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listePosts = [
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
}
