import { BehaviorSubject } from 'rxjs';

import { HttpService } from './http-service.service';
import { Injectable } from '@angular/core';

import { IUser } from 'src/app/shared/interfaces/user.interface';

@Injectable()
export class DataService{

    private user: IUser;
    private posts;

    constructor(){
        
    }

    setUser(user){
        this.user = user;
    }
    getUser(){
        return this.user;
    }

    setPosts(posts){
        this.posts = posts;
    }
    getPosts(){
        return this.posts;
    }

    getPost(userId: number, id: number){
        for(let i=0; i<this.posts.length; i++){
            if(this.posts[i].userId == userId && this.posts[i].id == id)
                return this.posts[i];
        }
        return {};
    }

}