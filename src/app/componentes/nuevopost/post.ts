export class Post{

    constructor(
        public content: string,
        public image_url: string
    ){}

    toString(){
        return "content="+this.content+
        "&image_url="+this.image_url;
    }
}