import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './app-routing';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/core/home/home.component';
import { UserComponent } from 'src/app/core/user/user.component';
import { PostComponent } from 'src/app/core/post/post.component';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
import { CompanyNamePipe } from 'src/app/shared/pipes/company-name.pipe';

import { DataService } from 'src/app/shared/services/data.service';
import { HttpService } from 'src/app/shared/services/http-service.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    UserComponent,
    PostComponent,
    PaginationComponent,
    CompanyNamePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
  ],
  providers: [
    DataService,
    HttpService,
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
