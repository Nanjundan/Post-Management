import { Component } from '@angular/core';

import { Constants } from 'src/app/shared/constants';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  navOptions: any;

  selectedNav: string;
  isMobileView: boolean = false;
  showNav: boolean = true;
  
  constructor(private utilityService: UtilityService,
              private router: Router){
    
  }

  ngOnInit(){

  }

}
