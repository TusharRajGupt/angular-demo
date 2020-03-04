import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnsavedFormGuard } from './route-guards/unsaved-form.guard';


const routes: Routes = [
    { path: 'login', component: LoginComponent, canDeactivate: [UnsavedFormGuard] },
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
