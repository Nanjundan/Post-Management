import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, Params } from '@angular/router';

import { Constants } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/shared/services/http-service.service';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { DataService } from 'src/app/shared/services/data.service';

import { IPost } from 'src/app/shared/interfaces/post.interface';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  user: IUser;
  userId: number;
  postId: number;

  post: IPost;
  comments: any;
  showComments: boolean = false;
  
  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpService: HttpService,
              private dataService: DataService){
                
  }

  ngOnInit(){
    this.route.params.subscribe( (params: Params) => {
      this.userId = params['userid'];
      this.postId = params['id'];
      this.post = this.dataService.getPost(this.userId, this.postId);
      this.user = this.dataService.getUser();
    });
  }

  
  toggleComments(){
    this.showComments = !this.showComments;
    if(this.showComments && !this.comments){
      this.httpService.getComments({postId: this.postId}).subscribe(res => {
        if(res)
          this.comments = res;
      }, err => {
        console.log("Error occured while retrieving the comments");
      });
    }
  }

  deletePost(){
    if(confirm("Are you sure you want to delete?")){
      this.httpService.deletePost({postId: this.postId}).subscribe(res => {
        this.router.navigate(['/user/', this.userId]);
      }, err => {
        alert("Error occured while deleting the post");
      });
    }
  }

}

