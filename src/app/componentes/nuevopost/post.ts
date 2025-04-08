import { AngularFireAuth } from "@angular/fire/compat/auth";

export class Post{

    uid: string | null = null;
  displayName: string | null = null;
  photoURL: string | null = null;

    constructor(
        public content: string,
        public image_url: string,
        private afAuth: AngularFireAuth
    ){this.afAuth.authState.subscribe(user => {
        if (user) {
          this.uid = user.uid;
          this.displayName = user.displayName;
          this.photoURL = user.photoURL;
        }
      });
    }

    toString(){
        return "user_id="+this.uid+
        "&content="+this.content+
        "&image_url="+this.image_url;
    }
}