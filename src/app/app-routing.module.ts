import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [

{ 
  path: "login",component: LoginComponent,
},

{
   path: "signup",component: SignupComponent,
},

{
  path: "dashboard",component: DashboardComponent,
},

{
  path: "news",component: NewsComponent,
},
{
  path:"",component:HomeComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
