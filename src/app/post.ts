export class Post{
    title: string;
    content: string;
    like: number
    dislike: number
    create_at: Date;

    constructor(titre: string, contenu: string){
        this.content = contenu;
        this.create_at = new Date();
        this.dislike = 0;
        this.like = 0;
        this.title = titre;

    }
}