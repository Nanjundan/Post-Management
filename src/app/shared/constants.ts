import { environment } from '../../environments/environment';

export class Constants {

    static get apiURLs(): any {
        return {
            "getUsers": `${environment.apiUrl}/users`,
            "getPosts": `${environment.apiUrl}/posts`,
            "getPostComments": `${environment.apiUrl}/comments`,
            "deletePost": `${environment.apiUrl}/posts/{postId}`
        }
    }
}
  
  
  