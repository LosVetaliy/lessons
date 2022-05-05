export class Post {
    constructor (title, description, cover, links) {
        this.title = title;
        this.description = description;
        this.cover = cover;
        this.spotify = links.spotify;
        this.apple = links.apple;
    };

    render (container) {
        console.log (this);
    }
}

