import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService{

    constructor(){

    }


    public constructRequestUrl(requestUrl: string, queryParams = {}) {
    
        // Replace embeded url params
        const regExp = /{([a-zA-Z-_]+)}/;
        while (requestUrl.match(regExp)) {
          const matchData = requestUrl.match(regExp);
          requestUrl = requestUrl.replace(matchData[0], queryParams[matchData[1]]);
          delete queryParams[matchData[1]];
        }
    
        // Append remaining query params
        if (Object.keys(queryParams).length) {
          requestUrl = requestUrl + this.formQueryStringURL(queryParams);
        }
    
        return requestUrl;
      }
    
    private formQueryStringURL(params){
        let url = "?";
        Object.keys(params).forEach(key => {
          if(params[key])
            url += `${key}=${params[key]}&`;
        });
        return url.substring(0, url.length-1);
      }
    
}