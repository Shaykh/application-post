export class Post {
    loveIts: number;
    title: string;
    content: string;
    created_at: Date;

    constructor(title?: string, content?: string) {
        this.loveIts = 0;
        this.title = title;
        if (content) {
            this.content = content;
        } else {
            this.content = 'Ceci est le texte du post. Il contient0donc un texte sans sens destiné à faire de la quantité de mots écrits.';
        }
        this.created_at = new Date();
    }
}
