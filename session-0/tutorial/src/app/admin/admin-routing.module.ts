import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
    {path: '', component: AdminComponent},
    {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
