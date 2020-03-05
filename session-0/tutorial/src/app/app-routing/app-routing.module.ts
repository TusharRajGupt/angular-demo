import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './route-guards/auth.guard';
import { DashboardComponent } from '../app-routes/dashboard/dashboard.component';
import { HomeComponent } from '../app-routes/home/home.component';
import { LoginComponent } from '../app-routes/login/login.component';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';
import { UnsavedFormGuard } from './route-guards/unsaved-form.guard';


const routes: Routes = [
    { path: 'login', component: LoginComponent, canDeactivate: [UnsavedFormGuard] },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
