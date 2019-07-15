export class Post {
    id: number;
    title: string;
    content: string;
    like: number;
    dislike: number;
// tslint:disable-next-line: variable-name
    create_at: Date;

    constructor(titre: string, contenu: string, newId: number) {
        this.content = contenu;
        this.create_at = new Date();
        this.dislike = 0;
        this.like = 0;
        this.title = titre;
        this.id = newId;
        

    }
}
