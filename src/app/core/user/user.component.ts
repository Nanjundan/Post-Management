import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, Params } from '@angular/router';

import { Constants } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/shared/services/http-service.service';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { DataService } from 'src/app/shared/services/data.service';

import { IPost } from 'src/app/shared/interfaces/post.interface';
import { IUser } from '../../shared/interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userId: number;
  user: IUser;

  isNextAvailable: boolean = false;
  pageNumber: number = 0;
  pageSize: number = 10;

  posts: IPost[] = [];
  
  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpService: HttpService,
              private dataService: DataService){
                
  }

  ngOnInit(){
    this.route.params.subscribe( (params: Params) => {
      this.userId = params['id'];
      this.user = this.dataService.getUser();
      this.getPosts();
    });
  }

  getPosts(){
    let params = {
      userId: this.userId,
      skip: (this.pageNumber*this.pageSize),
      limit: this.pageSize
    }
    this.httpService.getPosts(params).subscribe((res: IPost[]) => {
      if(res){
        this.posts = res;
        this.dataService.setPosts(this.posts);
        //If there are no records for current page, then disabling the Next button in thee pagination
        if(this.posts.length === 0)
          this.isNextAvailable = true;
      }
    }, err => {
      console.log("Error occured while retrieving the posts");
    });
  }
  
  changePage(type){
    if(type === 'prev')
      this.pageNumber--;
    else if(type === 'next')
      this.pageNumber++;
    this.getPosts();
  }

  goToPost(index){
    this.router.navigate(['/post/', this.userId, this.posts[index].id]);
  }

}

