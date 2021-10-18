import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { HomeHeaderComponent } from './Home/home-header/home-header.component';
import { HomeFooterComponent } from './Home/home-footer/home-footer.component';
import { TvShowsComponent } from './Home/tv-shows/tv-shows.component';
import { MoviesComponent } from './Home/movies/movies.component';
import { LoginPageComponent } from './Home/login-page/login-page.component';
import { MovieDetailsComponent } from './Home/movie-details/movie-details.component';
import { ShowDetailsComponent } from './Home/show-details/show-details.component';
import { ManageProfileComponent } from './Home/manage-profile/manage-profile.component';
import { PricingPlanComponent } from './Home/pricing-plan/pricing-plan.component';
import { ManageSettingsComponent } from './Home/manage-settings/manage-settings.component';
import { SignUpPageComponent } from './Home/sign-up-page/sign-up-page.component';
import { PlayVideoPageComponent } from './Home/play-video-page/play-video-page.component';
import { ResetPasswrodComponent } from './Home/reset-passwrod/reset-passwrod.component';
import { IndexComponent } from './AdminDashboard/index/index.component';
import { TestComponent } from './customer/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    TvShowsComponent,
    MoviesComponent,
    LoginPageComponent,
    MovieDetailsComponent,
    ShowDetailsComponent,
    ManageProfileComponent,
    PricingPlanComponent,
    ManageSettingsComponent,
    SignUpPageComponent,
    PlayVideoPageComponent,
    ResetPasswrodComponent,
    IndexComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
