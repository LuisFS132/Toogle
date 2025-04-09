export class Post{

    constructor(
        public uid: string,
        public content: string,
        public image_url: string,
    ){
    }

    toString(){
        return "user_id="+this.uid+
        "&content="+this.content+
        "&image_url="+this.image_url;
    }
}