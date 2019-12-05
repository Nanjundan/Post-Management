import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

import { Constants } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/shared/services/http-service.service';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { DataService } from 'src/app/shared/services/data.service';

import { IUser } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  users: IUser[] = [];
  
  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpService: HttpService,
              private dataService: DataService){
                
  }

  ngOnInit(){
    this.httpService.getUsers().subscribe((res: IUser[]) => {
      if(res)
        this.users = res;
    }, err => {
      console.log("Error occured while retrieving the users");
    });
  }

  selectUser(index){
    this.dataService.setUser(this.users[index]);
    this.router.navigate(['/user/', this.users[index].id]);
  }
  
}

