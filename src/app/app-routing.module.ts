import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './AdminDashboard/index/index.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { LoginPageComponent } from './Home/login-page/login-page.component';
import { ManageSettingsComponent } from './Home/manage-settings/manage-settings.component';
import { MessengerComponent } from './Home/messenger/messenger.component';
import { MoviesComponent } from './Home/movies/movies.component';
import { PlayVideoPageComponent } from './Home/play-video-page/play-video-page.component';
import { ShowDetailsComponent } from './Home/show-details/show-details.component';
import { SignUpPageComponent } from './Home/sign-up-page/sign-up-page.component';
import { TvShowsComponent } from './Home/tv-shows/tv-shows.component';

const routes: Routes = [
  {path:'' , component:LoginPageComponent}, // default Page
  {path:'HomePage' , component:HomePageComponent},
  {path:'ManageProfile' , component:ManageProfileComponent},
  {path:'TvShows',component: TvShowsComponent},
  { path:'TvShows',component: TvShowsComponent},
  {path:'Movie',component:MoviesComponent},
  {path:'Settings',component:ManageSettingsComponent},
  {path:'logIn',component:LoginPageComponent},
  {path:'ShowDetails',component:ShowDetailsComponent},
  {path:'playVideo',component:PlayVideoPageComponent},
  {path:'SignUp',component:SignUpPageComponent},
  {path:'adminDashboard',component:IndexComponent},
  {path:"messenger",component:MessengerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
