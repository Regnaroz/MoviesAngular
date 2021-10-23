import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms'
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
import { ManageSettingsComponent } from './Home/manage-settings/manage-settings.component';
import { SignUpPageComponent } from './Home/sign-up-page/sign-up-page.component';
import { PlayVideoPageComponent } from './Home/play-video-page/play-video-page.component';
import { ResetPasswrodComponent } from './Home/reset-passwrod/reset-passwrod.component';
import { IndexComponent } from './AdminDashboard/index/index.component';
import { TestComponent } from './customer/test/test.component';
import { SharedServiceService } from './shared-service.service';
import {HttpClientModule} from '@angular/common/http';
import { MessengerComponent } from './Home/messenger/messenger.component'
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
    ManageSettingsComponent,
    SignUpPageComponent,
    PlayVideoPageComponent,
    ResetPasswrodComponent,
    IndexComponent,
    TestComponent,
    MessengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
