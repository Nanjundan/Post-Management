import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Constants } from 'src/app/shared/constants';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { IUser } from '../interfaces/user.interface';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient,
              private utility: UtilityService) {

  }

  getUsers(params = {}){
    const url = this.utility.constructRequestUrl(Constants.apiURLs['getUsers'], params);
    return this.http.get(url);
  }

  getPosts(params = {}){
    const url = this.utility.constructRequestUrl(Constants.apiURLs['getPosts'], params);
    return this.http.get(url);
  }

  getComments(params = {}){
    const url = this.utility.constructRequestUrl(Constants.apiURLs['getPostComments'], params);
    return this.http.get(url);
  }

  deletePost(params = {}){
    const url = this.utility.constructRequestUrl(Constants.apiURLs['deletePost'], params);
    return this.http.delete(url);
  }

}