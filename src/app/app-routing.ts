import { Routes } from '@angular/router';

import { HomeComponent } from 'src/app/core/home/home.component';
import { UserComponent } from 'src/app/core/user/user.component';
import { PostComponent } from 'src/app/core/post/post.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'user/:id', component: UserComponent },
    { path: 'post/:userid/:id', component: PostComponent }
];
