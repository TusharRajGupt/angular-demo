import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './route-guards/auth.guard';
import { ForbiddenComponent } from './error-pages/forbidden/forbidden.component';
import { HomeComponent } from '../app-routes/home/home.component';
import { LoginComponent } from '../app-routes/login/login.component';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';
import { ResetPasswordComponent } from './../app-routes/reset-password/reset-password.component';
import { UnsavedFormGuard } from './route-guards/unsaved-form.guard';


const routes: Routes = [
    { path: 'login', component: LoginComponent, canDeactivate: [UnsavedFormGuard] },
    { path: 'forbidden', component: ForbiddenComponent },
    { path: 'home', component: HomeComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'admin', canActivate: [AuthGuard], loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) },
    { path: '', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
