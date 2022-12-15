import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './pages/genres/genres.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { TvShowComponent } from './pages/tv-show/tvshow.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from "./components/auth/register/register.component";
import { AuthGuard } from "./services/auth-guard/auth-guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/register',
    component: RegisterComponent
  },
  {
    path: 'movies',
    component: MoviesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movies/genres/:genreId',
    component: MoviesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tvshows',
    component: TvShowsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tv-show/:id',
    component: TvShowComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tvshows/genres/:genreId',
    component: TvShowsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'genres',
    component: GenresComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
