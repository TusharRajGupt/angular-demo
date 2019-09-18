import { CanActivateGuard } from './can-activate.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ErrorPageNotFoundComponent } from './error-page-not-found/error-page-not-found.component';
import { ErrorForbiddenComponent } from './error-forbidden/error-forbidden.component';
import { SignOutComponent } from './sign-out/sign-out.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [CanActivateGuard]},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent, canDeactivate: [CanDeactivateGuard]},
  {path: 'signout', component: SignOutComponent},
  {path: 'errorForbidden', component: ErrorForbiddenComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: ErrorPageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
